export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isString = (value: unknown): value is string => typeof value === 'string';
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: unknown): value is Function => typeof value === 'function';
export const isObject = (value: unknown): value is Record<string, unknown> => {
  if (value === null) {
    return false;
  }
  if (Object.prototype.toString.call(value) === '[object Array]') {
    return false;
  }
  return typeof value === 'object';
};
export const isArray = <T>(value: unknown): value is T[] => Array.isArray(value);
export const isElement = (value: unknown): value is Element => value instanceof Element;
export const isHTMLElement = (value: unknown): value is HTMLElement => value instanceof HTMLElement;
export const isTouchEvent = (value: unknown): value is TouchEvent => value instanceof TouchEvent;
export const isMouseEvent = (value: unknown): value is MouseEvent => value instanceof MouseEvent;
export const isPointerEvent = (value: unknown): value is PointerEvent => value instanceof PointerEvent;
export const isTouchList = (value: unknown): value is TouchList => value instanceof TouchList;
export const isDefined = <T>(value: T | undefined): value is T => value !== undefined;
export const isUndefined = <T>(value: T | undefined): value is undefined => value === undefined;
export const isNull = <T>(value: T | null): value is null => value === null;
export const isNil = <T>(value: T | null | undefined): value is null | undefined => value === null || value === undefined;
