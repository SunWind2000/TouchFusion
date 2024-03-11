export enum TOUCH_ACTION {
  COMPUTE = 'compute',
  AUTO = 'auto',
  MANIPULATION = 'manipulation',
  NONE = 'none',
  PAN_X = 'pan-x',
  PAN_Y = 'pan-y'
}

export const ACTIONS = [
  'none',
  'pan-x',
  'pan-y',
  'auto',
  'manipulation',
  'compute'
] as const;

export type IActions = typeof ACTIONS[number];
