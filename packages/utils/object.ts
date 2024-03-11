import { isObject, isArray, isFunction } from '@/utils';

/**
 * @description 遍历数组或对象
 * @param object 待操作的数组或对象
 * @param iterator 操作方法
 * @param context 
 * @returns 
 */
export const each = <T, K extends keyof T>(
  object: T, 
  iterator: (item?: unknown, key?: K, obj?: T) => unknown,
  context?: any
) => {
  if (!isObject(object) && !isArray(object)) {
    return;
  }

  if (isArray(object)) {
    object.forEach(iterator as (value: unknown, index: number, array: unknown[]) => void, context);
  } else {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        iterator.call(context, object[key], key as K, object);
      }
    }
  }
};

/**
 * @description 给定一个数组，调用数组中每个元素的指定方法
 * @param arr 待操作的数组
 * @param fn 方法名
 * @param context 包含方法的对象
 * @returns 
 */
export const invokeArrayArg = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  arr: unknown[],
  fn: K,
  context: T
) => {
  if (!isArray(arr)) {
    return false;
  }
  if (!isFunction(context[fn])) {
    return false;
  }

  each(
    arr,
    context[fn] as ((...args: unknown[]) => unknown), 
    context
  );
  return true;
};
