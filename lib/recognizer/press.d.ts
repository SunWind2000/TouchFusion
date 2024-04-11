import { Recognizer } from './abstract';
import type { IActions, RecognizerOptions } from '../constants';
import type { InputData } from '../types';
type PressRecognizerOptions = Partial<Pick<RecognizerOptions, 'threshold' | 'pointers' | 'time'>>;
export declare class PressRecognizer extends Recognizer {
    static readonly defaults: PressRecognizerOptions;
    private _timer;
    private _isRecognized;
    constructor(options?: PressRecognizerOptions);
    getTouchAction(): IActions[];
    process(inputData: InputData): any;
    reset(): void;
    protected emit(inputData: InputData): void;
}
export {};
