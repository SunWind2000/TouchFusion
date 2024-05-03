import { AttrRecognizer } from './abstract';
import { RECOGNIZER_STATE, RECOGNIZER_TYPE } from './constants';

import type { IActions } from '@/manager';
import type { IRecognizerOptions } from './types';
import type { InputData } from '@/input';

type IPinchRecognizerOptions = Partial<Pick<
  IRecognizerOptions,
  'pointers' | 'threshold'
>>;

/**
 * Recognized when two or more pointers are moving toward (zoom-in) or away from (zoom-out) each other.
 
 */
export class PinchRecognizer extends AttrRecognizer {

  public static readonly defaults: IPinchRecognizerOptions = {
    pointers: 2,
    threshold: 0
  };

  constructor(options: IPinchRecognizerOptions = {}) {
    super({
      ...PinchRecognizer.defaults,
      ...options
    });
    this.init(RECOGNIZER_TYPE.Pinch);
  }

  public getTouchAction(): IActions[] {
    return ['none'];
  }

  public attrTest(inputData: InputData): boolean {
    return !!(
      super.attrTest(inputData) &&
      (this.state & RECOGNIZER_STATE.Began || Math.abs(inputData.scale! - 1) > this.options.threshold!)
    );
  }

  public emit(data: InputData): void {
    if (data.scale !== 1) {
      data.additionalEvent = `${this.type}${data.scale! < 1 ? 'in' : 'out'}`;
    }
    super.emit(data);
  }
}

