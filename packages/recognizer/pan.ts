import { AttrRecognizer } from './abstract';
import { DIRECTION, getDirectionStr } from '@/input';
import { RECOGNIZER_STATE, RECOGNIZER_TYPE } from './constants';

import type { InputData } from '@/input';
import type { IRecognizerOptions } from './types';
import type { IActions } from '@/manager';

type IPanRecognizerOptions = Partial<Pick<
  IRecognizerOptions,
  'pointers' | 'threshold' | 'direction'
>>;

/**
 * Recognized when the pointer is down and moved in the allowed direction.
 */
export class PanRecognizer extends AttrRecognizer {

  public static readonly defaults: IPanRecognizerOptions = {
    pointers: 1,
    threshold: 10,
    direction: DIRECTION.All
  };

  private _dX: number | null;
  private _dY: number | null;

  constructor(options: IPanRecognizerOptions = {}) {
    super({
      ...PanRecognizer.defaults,
      ...options
    });

    this._dX = null;
    this._dY = null;
    this.init(RECOGNIZER_TYPE.Pan);
  }

  public getTouchAction() {
    const { direction } = this.options;
    const actions: IActions[] = [];
    if (direction! & DIRECTION.Horizontal) {
      actions.push('pan-y');
    }
    if (direction! & DIRECTION.Vertical) {
      actions.push('pan-x');
    }

    return actions;
  }

  public attrTest(inputData: InputData): boolean {

    // 触摸点数量一致
    // 且移动距离和方向符合要求

    return !!(super.attrTest(inputData) &&
      (
        this.state & RECOGNIZER_STATE.Began ||
        (!(this.state & RECOGNIZER_STATE.Began) && this._directionTest(inputData))
      )
    );
    
  }

  public emit(data: InputData): void {

    // 记录上次移动距离
    this._dX = data.deltaX || 0;
    this._dY = data.deltaY || 0;

    const dirStr = getDirectionStr(data.direction!);
    if (dirStr) {
      data.additionalEvent = `${this._type}-${dirStr}`;
    }
    
    super.emit(data);
  }

  private _directionTest(input: InputData): boolean {

    let hasMoved = true;
    const { deltaX, deltaY } = input;

    if (!(input.direction! & this.options.direction!)) {
      if (this.options.direction! & DIRECTION.Horizontal) {
        input.direction = (deltaX === 0) ? DIRECTION.None : ((deltaX! < 0) ? DIRECTION.Left : DIRECTION.Right);
        input.distance = Math.abs(deltaX!);
        hasMoved = deltaX !== this._dX;
      } else {
        input.direction = (deltaY === 0) ? DIRECTION.None : ((deltaY! < 0) ? DIRECTION.Up : DIRECTION.Down);
        input.distance = Math.abs(deltaY!);
        hasMoved = deltaY !== this._dY;
      }
    }

    return !!(
      hasMoved &&
      (this.options.direction! & input.direction!) &&
      input.distance! > this.options.threshold!
    );
  }
}
