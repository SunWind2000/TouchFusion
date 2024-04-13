export enum DIRECTION {
  None = 1,
  Left = 2,
  Right = 4,
  Up = 8,
  Down = 16,
  Horizontal = 6,
  Vertical = 24,
  All = 30
}

export const DIRECTION_HORIZONTAL = DIRECTION.Left | DIRECTION.Right;
export const DIRECTION_VERTICAL = DIRECTION.Up | DIRECTION.Down;

export enum INPUT_STATE {
  Start = 1,
  Move = 2,
  End = 4,
  Cancel = 8
}

export enum INPUT_TYPE {
  Touch = 'touch',
  Mouse = 'mouse',
  Pen = 'pen',
  Kinect = 'kinect'
}

export const COMPUTE_INTERVAL = 25;

export const MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
export const SUPPORT_TOUCH = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
export const SUPPORT_POINTER_EVENTS = 'PointerEvent' in window;
export const SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

