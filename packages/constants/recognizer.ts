import { DIRECTION } from './input';

export enum RECOGNIZER_STATE {
  Possible = 1,
  Began = 2,
  Changed = 4,
  Ended = 8,
  Canceled = 16,
  Failed = 32
}

export enum RECOGNIZER_TYPE {
  Swipe = 'swipe',
  Pan = 'pan',
  Pinch = 'pinch',
  Rotate = 'rotate',
  Press = 'press',
  Tap = 'tap'
}

export interface RecognizerOptions {
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
}
