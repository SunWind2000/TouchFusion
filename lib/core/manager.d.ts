import { RECOGNIZER_TYPE, ManagerOptions } from '../constants';
import { TouchAction } from './touch-action';
import { Recognizer } from './recognizer';
import type { IManager, IManagerSession, InputData } from '../types';
export declare class Manager implements IManager {
    private _element;
    private _options;
    private _recognizers;
    private _session;
    private _touchAction;
    private _input;
    private _oldCssProps;
    private handlers;
    constructor(element: HTMLElement, options?: ManagerOptions);
    get element(): HTMLElement;
    get options(): ManagerOptions;
    get recognizers(): Recognizer[];
    get session(): IManagerSession;
    get touchAction(): TouchAction;
    stop(force: boolean): void;
    set(options: ManagerOptions): void;
    get(recognizer: RECOGNIZER_TYPE): Recognizer | null;
    add(recognizer: Recognizer): void;
    remove(recognizer: Recognizer): void;
    on(recognizer: RECOGNIZER_TYPE, handler: (data: InputData) => unknown): void;
    off(recognizer: RECOGNIZER_TYPE[]): void;
    destroy(): void;
    /**
     * Run the recognizers. Called by the inputHandler function on every movement of the pointers.
     * It works by calling the recognize method of each recognizer.
     * If the recognizer recognizes the input, it will call the emit method of the recognizer.
     * @param input The data from the inputHandler.
     */
    recognize(input: InputData): void;
    /**
     * Emit event. Called by the recognizer when it recognizes the input.
     * @param type Touch event type
     * @param input input data
     */
    emit(type: RECOGNIZER_TYPE, input: InputData): void;
    clearSession(): void;
    private _toggleCssProps;
}
