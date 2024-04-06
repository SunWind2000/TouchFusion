import { Recognizer } from './abstract';
import { INPUT_STATE, RECOGNIZER_STATE, RECOGNIZER_TYPE } from '@/constants';

import type { IActions, RecognizerOptions } from '@/constants';
import type { InputData } from '@/types';

type PressRecognizerOptions  = Partial<Pick<
  RecognizerOptions, 
  'threshold' | 'pointers' | 'time'
>>;

export class PressRecognizer extends Recognizer {

  public static readonly defaults: PressRecognizerOptions = {
    threshold: 9,
    pointers: 1,
    time: 251
  };

  protected _type = RECOGNIZER_TYPE.Press;
  private _timer: NodeJS.Timeout | null = null;

  constructor(options: PressRecognizerOptions = {}) {
    super({
      ...PressRecognizer.defaults,
      ...options
    });
  }

  public getTouchAction(): IActions[] {
    return ['auto'];
  }

  public process(inputData: InputData) {

    const validPointers = inputData.pointers!.length === this.options.pointers;
    const validMovement = inputData.distance! < this.options.threshold!;
    const validTime = inputData.deltaTime! > this.options.time!;

    // we only allow little movement
    // and we've reached an end event, so a tap is possible
    if (!validMovement || !validPointers || (inputData.eventType! & (INPUT_STATE.End | INPUT_STATE.Cancel) && !validTime)) {
      this.reset();
    } else if (inputData.eventType! & INPUT_STATE.Start) {
      this.reset();
      this._timer = setTimeout(() => {
        this.state = RECOGNIZER_STATE.Ended;
      }, this.options.time);
    } else if (inputData.eventType! & INPUT_STATE.End) {
      return RECOGNIZER_STATE.Ended;
    }

    return RECOGNIZER_STATE.Failed;
  }

  public reset() {
    if (this._timer) {
      clearTimeout(this._timer);
    }
    this._timer = null;
  }
}
