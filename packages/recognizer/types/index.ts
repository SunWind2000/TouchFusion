import type { DIRECTION, InputData } from '@/input';
import type { IActions } from '@/manager';
import type { Recognizer } from '../abstract';
import type { RECOGNIZER_TYPE } from '../constants';

export interface IRecognizerOptions {
  /**
   * @description 触发识别的手指数.
   */
  pointers?: number;
  /**
   * @description 识别手势是否启用.
   */
  enable?: boolean;
  /**
   * @description 触发识别的最小移动距离（px）.
   */
  threshold?: number;
  /**
   * @description 触发识别的最小移动速度.
   */
  velocity?: number;
  /**
   * @description 识别手势的方向.
   */
  direction?: DIRECTION;
  /**
   * @description 识别手势的最小时间，单位ms.
   */
  time?: number;
  /**
   * @description 两次手势动作触发的间隔，单位ms.
   */
  interval?: number;
  /**
   * @description tap事件触发的次数.
   */
  taps?: number;
  /**
   * @description 多次点击时允许的最小位移.
   */
  posThreshold?: number;
}

export interface IRecognizer {
  id: string
  options: IRecognizerOptions;
  type: RECOGNIZER_TYPE;
  hasRequireFailures: boolean;
  canRecognizeWith: (otherRecognizer: Recognizer) => boolean;
  set: (options: IRecognizerOptions) => void;
  getTouchAction: () => IActions[];
  recognizeWith: (recognizer: Recognizer | Recognizer[]) => Recognizer;
  dropRecognizeWith: (recognizer: Recognizer | Recognizer[]) => Recognizer;
  requireFailure: (recognizer: Recognizer | Recognizer[]) => Recognizer;
  dropRequireFailure: (recognizer: Recognizer | Recognizer[]) => Recognizer;
  recognize: (data: InputData) => void;
  reset: () => void;
}

