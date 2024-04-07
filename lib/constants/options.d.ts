import { IActions } from './touch-action';
export interface ManagerOptions {
    domEvents?: boolean;
    touchActions?: IActions[];
    /**
     * 是否阻止所有input事件的默认行为
     */
    preventDefault?: boolean;
    /**
     * 是否阻止所有input事件冒泡
     */
    stopPropagation?: boolean;
    /**
     * 是否阻止所有input事件立即停止
     */
    stopImmediatePropagation?: boolean;
    enable?: boolean;
    inputTarget?: Element | null;
    cssProps?: Partial<CSSStyleDeclaration>;
}
export declare const DEFAULT_OPTIONS: ManagerOptions;
