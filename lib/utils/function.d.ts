/**
 * simple function bind
 * @param fn
 * @param context
 * @returns bound function
 */
export declare const bindFn: (fn: (...args: any[]) => any, context: Record<any, any>) => (...args: any[]) => any;
