/**
 * simple function bind
 * @param fn
 * @param context
 * @returns bound function
 */
export const bindFn = (
  fn: (...args: any[]) => any,
  context: Record<any, any>
) => {
  return function boundFn(...args: any[]) {
    return fn.apply(context, args);
  };
};
