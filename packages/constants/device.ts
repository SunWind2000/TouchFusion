export const MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
export const SUPPORT_TOUCH = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
export const SUPPORT_POINTER_EVENTS = 'PointerEvent' in window;
export const SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
