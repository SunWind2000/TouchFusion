export declare enum TOUCH_ACTION {
    COMPUTE = "compute",
    AUTO = "auto",
    MANIPULATION = "manipulation",
    NONE = "none",
    PAN_X = "pan-x",
    PAN_Y = "pan-y"
}
export declare const ACTIONS: readonly ["none", "pan-x", "pan-y", "auto", "manipulation", "compute"];
export type IActions = typeof ACTIONS[number];
