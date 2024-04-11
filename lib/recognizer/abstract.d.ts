import { RECOGNIZER_TYPE, RECOGNIZER_STATE } from '../constants';
import type { IManager, IRecognizer, InputData } from '../types';
import type { IActions, RecognizerOptions } from '../constants';
export declare abstract class Recognizer implements IRecognizer {
    protected _type: RECOGNIZER_TYPE;
    protected _manager: IManager | null;
    private _id;
    private _state;
    private _options;
    private simultaneous;
    private requireFails;
    constructor(options: RecognizerOptions);
    get type(): RECOGNIZER_TYPE;
    get id(): string;
    get state(): RECOGNIZER_STATE;
    get options(): RecognizerOptions;
    get hasRequireFailures(): boolean;
    set state(state: RECOGNIZER_STATE);
    set manager(manager: IManager);
    set(options: RecognizerOptions): void;
    canRecognizeWith(otherRecognizer: Recognizer): boolean;
    recognizeWith(recognizer: Recognizer | Recognizer[]): this;
    dropRecognizeWith(recognizer: Recognizer | Recognizer[]): this;
    requireFailure(recognizer: Recognizer | Recognizer[]): this;
    dropRequireFailure(recognizer: Recognizer | Recognizer[]): this;
    protected emit(data: InputData): void;
    protected tryEmit(data: InputData): void;
    protected canEmit(): boolean;
    recognize(data: InputData): void;
    abstract getTouchAction(): IActions[];
    abstract reset(): void;
    abstract process(inputData: InputData): RECOGNIZER_STATE;
    private getRecognizerByNameIfManager;
}
export declare abstract class AttrRecognizer extends Recognizer {
    constructor(options: RecognizerOptions);
    abstract getTouchAction(): IActions[];
    protected attrTest(inputData: InputData): boolean;
    reset(): void;
    process(inputData: InputData): RECOGNIZER_STATE;
}
