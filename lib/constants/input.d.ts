export declare enum DIRECTION {
    None = 1,
    Left = 2,
    Right = 4,
    Up = 8,
    Down = 16,
    Horizontal = 6,
    Vertical = 24,
    All = 30
}
export declare const DIRECTION_HORIZONTAL: number;
export declare const DIRECTION_VERTICAL: number;
export declare enum INPUT_STATE {
    Start = 1,
    Move = 2,
    End = 4,
    Cancel = 8
}
export declare enum INPUT_TYPE {
    Touch = "touch",
    Mouse = "mouse",
    Pen = "pen",
    Kinect = "kinect"
}
export declare const COMPUTE_INTERVAL = 25;
