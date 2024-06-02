import { Recognizer } from './abstract';
import { RECOGNIZER_STATE, RECOGNIZER_TYPE } from './constants';
import { INPUT_STATE, InputUtil } from '@/input';

import type { IActions } from '@/manager';
import type { InputData, Point2D } from '@/input';
import type { IRecognizerOptions } from './types';

type ITapRecognizerOptions = Partial<Pick<IRecognizerOptions,
  'threshold'| 'pointers' | 'time' | 'interval' | 'taps'
>>;

export class TapRecognizer extends Recognizer {

  public static readonly defaults: ITapRecognizerOptions = {
    threshold: 9,
    pointers: 1,
    time: 250,
    interval: 300,
    taps: 1
  };

  private _timer: NodeJS.Timeout | null = null;
  private _input: InputData | null = null;

  // previous tap time and center
  // used for tap counting
  private _prevTime: number | null = null;
  private _prevCenter: Point2D | null = null;
  private _count: number = 0;

  constructor(options: ITapRecognizerOptions = {}) {
    super({
      ...TapRecognizer.defaults,
      ...options
    });

    this.init(RECOGNIZER_TYPE.Tap);
  }

  public getTouchAction(): IActions[] {
    return ['manipulation'];
  }

  protected process(data: InputData): RECOGNIZER_STATE {

    const validPointers = data.pointers!.length === this.options.pointers;
    const validMovement = data.distance! < this.options.threshold!;
    const validTime = data.deltaTime! < this.options.time!;

    this.reset();

    if (
      (data.eventType! & INPUT_STATE.Start) &&
      this._count === 0
    ) {
      return this.failTimeout();
    }

    if (validMovement && validTime && validPointers) {
      if (data.eventType! !== INPUT_STATE.End) {
        return this.failTimeout();
      }

      const validInterval = this._prevTime ? data.timestamp! - this._prevTime < this.options.interval! : true;
      const validMultiTap = this._prevCenter
        ? InputUtil.getDistance(this._prevCenter, data.center!) < this.options.posThreshold!
        : true;

      this._prevTime = data.timestamp!;
      this._prevCenter = data.center!;

      if (!validMultiTap || !validInterval) {
        this._count = 1;
      } else {
        this._count += 1;
      }

      this._input = data;

      const tapCount = this._count % this.options.taps!;
      if (tapCount === 0) {
        if (!this.hasRequireFailures) {
          return RECOGNIZER_STATE.Ended;
        } else {
          this._timer = setTimeout(() => {
            this.state = RECOGNIZER_STATE.Ended;
            this.tryEmit(this._input!);
          }, this.options.interval!);
          return RECOGNIZER_STATE.Began;
        }
      }
    }

    return RECOGNIZER_STATE.Failed;
  }

  private failTimeout() {
    this._timer = setTimeout(() => {
      this.state = RECOGNIZER_STATE.Failed;
    }, this.options.time);
    return RECOGNIZER_STATE.Failed;
  }

  public reset() {
    if (this._timer) {
      clearTimeout(this._timer);
    }
  }

  // 重写Emit方法覆盖抽象类中的方法，在识别器处于非识别中状态时，不会触发Emit
  protected emit() {
    if (this.state === RECOGNIZER_STATE.Ended) {
      this._input!.tapCount = this._count;
      super.emit(this._input!);
    }
  }
}

