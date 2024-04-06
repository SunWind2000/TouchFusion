/**
 * @description 遍历数组或对象
 * @param object 待操作的数组或对象
 * @param iterator 操作方法
 * @param context
 * @returns
 */
export declare const each: <T, K extends keyof T>(object: T, iterator: (item?: unknown, key?: K, obj?: T) => unknown, context?: any) => void;
/**
 * @description 给定一个数组，调用数组中每个元素的指定方法
 * @param arr 待操作的数组
 * @param fn 方法名
 * @param context 包含方法的对象
 * @returns
 */
export declare const invokeArrayArg: <T extends Record<string, unknown>, K extends keyof T>(arr: unknown[], fn: K, context: T) => boolean;
/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param src [{id:1},{id:2},{id:1}]
 * @param key
 * @param sort
 * @returns [{id:1},{id:2}]
 */
export declare const uniqueArray: <T extends unknown>(src: T[], key?: string, sort?: boolean) => T[];
