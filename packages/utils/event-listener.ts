import { each, isString } from '.';

export const addEventListener = (
  el: EventTarget,
  types: string[],
  handler: EventListenerOrEventListenerObject
): void => {
  each(types, (t) => {
    if (isString(t)) {
      el.addEventListener(t, handler, false);
    }
  });
};

export const removeEventListener = (
  el: EventTarget,
  types: string[],
  handler: EventListenerOrEventListenerObject
): void => {
  each(types, (t) => {
    if (isString(t)) {
      el.removeEventListener(t, handler, false);
    }
  });
};
