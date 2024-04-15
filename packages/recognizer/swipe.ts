import { AttrRecognizer } from './abstract';
import { RECOGNIZER_TYPE } from './constants';
import { DIRECTION, INPUT_STATE, getDirectionStr } from '@/input';

import type { InputData } from '@/input';
import type { IRecognizerOptions } from './types';
import type { IActions } from '@/manager';

type ISwipeRecognizerOptions = Partial<Pick<
  IRecognizerOptions,
  'pointers' | 'threshold' | 'direction' | 'velocity'
>>;

/**
 * Recognized when the pointer is down and moved with velocity in the allowed direction.
 */
export class SwipeRecognizer extends AttrRecognizer {

  public static readonly defaults: ISwipeRecognizerOptions = {
    pointers: 1,
    threshold: 10,
    direction: DIRECTION.All,
    velocity: 0.3
  };

  constructor(options: ISwipeRecognizerOptions = {}) {
    super({
      ...SwipeRecognizer.defaults,
      ...options
    });
    this._type = RECOGNIZER_TYPE.Swipe;
  }

  public getTouchAction(): IActions[] {
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

    const { direction } = this.options;
    let velocity: number = 0;

    if (direction! & (DIRECTION.Horizontal | DIRECTION.Vertical)) {
      velocity = inputData.overallVelocity!;
    } else if (direction! & DIRECTION.Horizontal) {
      velocity = inputData.overallVelocityX!;
    } else if (direction! & DIRECTION.Vertical) {
      velocity = inputData.overallVelocityY!;
    }

    return !!(
      super.attrTest(inputData) &&
      direction! & inputData.offsetDirection! &&
      inputData.eventType! & INPUT_STATE.End &&
      inputData.distance! > this.options.threshold! &&
      inputData.maxPointers! === this.options.pointers! &&
      Math.abs(velocity) > this.options.velocity!
    );
  }

  public emit(inputData: InputData): void {
    const dirStr = getDirectionStr(inputData.offsetDirection!);

    if (dirStr) {
      inputData.additionalEvent = `${this._type}-${dirStr}`;
    }

    super.emit(inputData);
  }
}

