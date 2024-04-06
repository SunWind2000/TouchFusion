import { IActions } from './touch-action';
export interface ManagerOptions {
    domEvents?: boolean;
    touchActions?: IActions[];
    enable?: boolean;
    inputTarget?: Element | null;
    cssProps?: {
        userSelect?: string;
        touchSelect?: string;
        touchCallout?: string;
        contentZooming?: string;
        userDrag?: string;
        tapHighlightColor?: string;
    };
}
export declare const DEFAULT_OPTIONS: ManagerOptions;
