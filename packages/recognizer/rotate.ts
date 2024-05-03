import { AttrRecognizer } from './abstract';
import { RECOGNIZER_STATE, RECOGNIZER_TYPE } from './constants';

import type { IActions } from '@/manager';
import type { IRecognizerOptions } from './types';
import type { InputData } from '@/input';

type IRotateRecognizerOptions = Partial<Pick<
  IRecognizerOptions,
  'pointers' | 'threshold'
>>;

/**
 * Recognized when two or more pointers are moving in a circular direction.
 */
export class RotateRecognizer extends AttrRecognizer {

  public static readonly defaults: IRotateRecognizerOptions = {
    pointers: 2,
    threshold: 0
  };

  constructor(options: IRotateRecognizerOptions = {}) {
    super({
      ...RotateRecognizer.defaults,
      ...options
    });
    this.init(RECOGNIZER_TYPE.Rotate);
  }

  public getTouchAction(): IActions[] {
    return ['none'];
  }

  public attrTest(inputData: InputData): boolean {
    return !!(
      super.attrTest(inputData) &&
      (this.state & RECOGNIZER_STATE.Began || Math.abs(inputData.rotation!) > this.options.threshold!)
    );
  }
}
