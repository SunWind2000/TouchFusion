import {
  DEFAULT_OPTIONS,
  RECOGNIZER_TYPE,
  STOP_TYPE,
  RECOGNIZER_STATE,
  ManagerOptions
} from '@/constants';
import { TouchAction } from '@/touch-action';
import { Recognizer } from '@/recognizer';
import { createInputInstance } from '@/input';
import { each } from '@/utils';

import type { IManager, IManagerSession, InputData } from '@/types';
import type { AbstractInput } from '@/input/abstract';

export class Manager implements IManager {
  private _element: HTMLElement;
  private _options: Required<ManagerOptions>;
  private _recognizers: Recognizer[];
  private _session: IManagerSession;
  private _touchAction: TouchAction;
  private _input: AbstractInput;
  private _oldCssProps: Record<string, any>;
  private handlers: Record<RECOGNIZER_TYPE, (data: InputData) => unknown>;
  
  constructor(element: HTMLElement, options?: ManagerOptions) {
    this._element = element;
    this._options = { ...DEFAULT_OPTIONS, ...options } as Required<ManagerOptions>;
    this._options.inputTarget = options?.inputTarget ?? this._element;
    
    this._recognizers = [];

    this._input = createInputInstance(this);
    this._touchAction = new TouchAction(this, this._options.touchActions!);

    this._session = {} as IManagerSession;

    this.handlers = {} as Record<RECOGNIZER_TYPE, (data: InputData) => unknown>;

    this._oldCssProps = {};
    this._toggleCssProps('add');
  }

  get element(): HTMLElement {
    return this._element;
  }

  get options(): ManagerOptions {
    return this._options;
  }

  get recognizers(): Recognizer[] {
    return this._recognizers;
  }

  get session(): IManagerSession {
    return this._session;
  }

  get touchAction(): TouchAction {
    return this._touchAction;
  }

  public stop(force: boolean): void {
    this._session.stopped = force ? STOP_TYPE.ForceStop : STOP_TYPE.Stop;
  }

  public set(options: ManagerOptions): void {
    this._options = { ...this._options, ...options };
  }

  public get(recognizer: RECOGNIZER_TYPE): Recognizer | null {
    return this._recognizers.find((item) => item.type === recognizer) || null;
  }

  public add(recognizer: Recognizer): void {
    recognizer.manager = this;
    this._recognizers.push(recognizer);
  }

  public remove(recognizer: Recognizer): void {
    const index = this._recognizers.findIndex((item) => item.type === recognizer.type);
    if (index > -1) {
      this._recognizers.splice(index, 1);
    }
  }

  public on(recognizer: RECOGNIZER_TYPE, handler: (data: InputData) => unknown): void {
    this.handlers[recognizer] = handler;
  }

  public off(recognizer: RECOGNIZER_TYPE[]): void {
    recognizer.forEach((item) => {
      delete this.handlers[item];
    });
  }

  public destroy(): void { 
    this._toggleCssProps('remove');
    this._recognizers = [];
    this._input.destroy();
    this._session = {} as IManagerSession;
    this.handlers = {} as Record<RECOGNIZER_TYPE, (data: InputData) => unknown>;
  }

  /**
   * Run the recognizers. Called by the inputHandler function on every movement of the pointers.
   * It works by calling the recognize method of each recognizer.
   * If the recognizer recognizes the input, it will call the emit method of the recognizer.
   * @param input The data from the inputHandler.
   */
  public recognize(input: InputData): void {
    if (this._session.stopped) {
      return;
    }
    this.touchAction.preventDefault(input);

    let { curRecognizer } = this._session;
    if (
      !curRecognizer || 
      (curRecognizer && curRecognizer.state === RECOGNIZER_STATE.Ended)
    ) {
      curRecognizer = this._session.curRecognizer = null;
    }

    for (let i = 0; i < this._recognizers.length; i++) {
      const recognizer = this._recognizers[i];
      if (
        this._session.stopped !== STOP_TYPE.ForceStop &&
        (!curRecognizer || recognizer === curRecognizer || recognizer.canRecognizeWith(curRecognizer))
      ) {
        recognizer.recognize(input);
      } else {
        recognizer.reset();
      }

      if (
        !curRecognizer &&
        (recognizer.state & (RECOGNIZER_STATE.Began | RECOGNIZER_STATE.Changed | RECOGNIZER_STATE.Ended))
      ) {
        curRecognizer = this._session.curRecognizer = recognizer;
      }
    }
  }

  /**
   * Emit event. Called by the recognizer when it recognizes the input.
   * @param type Touch event type
   * @param input input data
   */
  public emit(type: RECOGNIZER_TYPE, input: InputData): void {
    const handler = this.handlers[type];

    input.type = type;
    input.preventDefault = () => {
      input.srcEvent?.preventDefault();
    };
    
    if (handler) {
      handler(input);
    }
  }

  public clearSession(): void {
    this._session = {} as IManagerSession;
  }

  private _toggleCssProps(action: 'add' | 'remove') {
    if (!this._options.cssProps || !this._element.style) {
      return;
    }
    each(this._options.cssProps, (value, prop) => {
      if (action === 'add') {
        this._oldCssProps[prop as any] = this._element.style[prop as keyof CSSStyleDeclaration];
        this._element.style[prop as any] = value as any;
      } else {
        this._element.style[prop as any] = this._oldCssProps[prop as any] || '';
      }
    });
    if (action !== 'add') {
      this._oldCssProps = {};
    }
  }
}