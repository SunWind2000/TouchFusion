import { MouseInput } from './mouse';
import { TouchInput } from './touch';
// import { PointerEventInput } from './pointer-event';
import { TouchMouseInput } from './touch-mouse';
import { inputHandler } from './input-handler';
import {
  SUPPORT_ONLY_TOUCH,
  // SUPPORT_POINTER_EVENTS,
  SUPPORT_TOUCH
} from '@/constants';

import type { Manager } from '@/manager';

export const createInputInstance = (manager: Manager) => {
  let Type;

  if (SUPPORT_ONLY_TOUCH) {
    Type = TouchInput;
  } else if (!SUPPORT_TOUCH) {
    Type = MouseInput;
  } else {
    Type = TouchMouseInput;
  }

  return new (Type)(manager, inputHandler);
};

export * from './util';
