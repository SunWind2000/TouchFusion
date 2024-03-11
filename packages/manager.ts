import {
  DEFAULT_OPTIONS,
  RECOGNIZER_TYPE,
  STOP_TYPE
} from '@/constants';
import { TouchAction } from '@/core/touch-action';
import { Recognizer } from '@/core/recognizer';

import type { IManager, IManagerSession, Input } from '@/types';
import type { ManagerOptions } from '@/constants';

export class Manager implements IManager {
  private _element: HTMLElement;
  private _options: ManagerOptions;
  private _recognizers: Recognizer[];
  private _session: IManagerSession;
  private _touchAction: TouchAction;
  private handlers: Record<RECOGNIZER_TYPE, (data: Input) => unknown>;
  
  constructor(element: HTMLElement, options: ManagerOptions) {
    this._element = element;
    this._options = { ...DEFAULT_OPTIONS, ...options };
    
    this._recognizers = [];

    this._touchAction = new TouchAction(this, this._options.touchActions!);

    this._session = {} as IManagerSession;

    this.handlers = {} as Record<RECOGNIZER_TYPE, (data: Input) => unknown>;
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
    this._recognizers.push(recognizer);
  }

  public remove(recognizer: Recognizer): void {
    const index = this._recognizers.findIndex((item) => item.type === recognizer.type);
    if (index > -1) {
      this._recognizers.splice(index, 1);
    }
  }

  public on(recognizer: RECOGNIZER_TYPE[], handler: (data: Input) => unknown): void {
    recognizer.forEach((item) => {
      this.handlers[item] = handler;
    });
  }

  public off(recognizer: RECOGNIZER_TYPE[]): void {
    recognizer.forEach((item) => {
      delete this.handlers[item];
    });
  }

  public destroy(): void {  
    this._recognizers = [];
    this._session = {} as IManagerSession;
    this.handlers = {} as Record<RECOGNIZER_TYPE, (data: Input) => unknown>;
  }

  public recognize(input: Input): void {
    this._recognizers.forEach((item) => {
      if (item.type === input.type) {
        const handler = this.handlers[item.type];
        if (handler) {
          handler(input);
        }
      }
    });
  }

  public emit(type: RECOGNIZER_TYPE, input: Input): void {
    const handler = this.handlers[type];
    if (handler) {
      handler(input);
    }
  }
}
