export enum RECOGNIZER_STATE {
  Possible = 1,
  Began = 2,
  Changed = 4,
  Ended = 8,
  Canceled = 16,
  Failed = 32
}

export enum RECOGNIZER_TYPE {
  /**
   * @description 内部事件Emit，会对所有的InputData进行广播.
   */
  Secret = 'touch-fusion.input',
  /**
   * @description 未知识别器，用作识别器抽象类初始值.
   */
  Unknown = 'unknown',
  Swipe = 'swipe',
  Pan = 'pan',
  Pinch = 'pinch',
  Rotate = 'rotate',
  Press = 'press',
  Tap = 'tap'
}
