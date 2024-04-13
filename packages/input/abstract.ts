import { addEventListener, removeEventListener } from '@/utils';

import type { Manager } from '@/manager';
import type { InputData } from './types';
import type { INPUT_STATE } from './constants';

export type InputCallback = (manager: Manager, eventType: INPUT_STATE, input: InputData) => void;

export abstract class AbstractInput {
  private el: HTMLElement;
  private _manager: Manager;
  private _target: EventTarget | null;
  private _evEl: string[] = [];
  private _evWin: string[] = [];
  private _evTarget: string[] = [];
  private domHandler: (ev: Event) => void;
  protected callback: InputCallback;

  get manager() {
    return this._manager;
  }

  get target() {
    return this._target;
  }

  set evEl(value: string[]) {
    this._evEl = value;
  }

  set evWin(value: string[]) {
    this._evWin = value;
  }

  set evTarget(value: string[]) {
    this._evTarget = value;
  }

  constructor(manager: Manager, callback: InputCallback) {
    this._manager = manager;
    this.el = manager.element;
    this._target = manager.options.inputTarget!;
    this.callback = callback;

    this.domHandler = (ev: Event) => {
      if (this._manager.options.enable){
        this.handler(ev);
      }
    };
  }

  public abstract handler(...args: any[]): void;

  public init() {
    this._evEl.length !== 0 && addEventListener(this.el, this._evEl, this.domHandler);
    this._evTarget.length !== 0 && this.target && addEventListener(this.target, this._evTarget, this.domHandler);
    this._evWin.length !== 0 && addEventListener(window, this._evWin, this.domHandler);
  }

  public destroy() {
    this._evEl.length !== 0 && removeEventListener(this.el, this._evEl, this.domHandler);
    this._evTarget.length !== 0 && this.target && removeEventListener(this.target, this._evTarget, this.domHandler);
    this._evWin.length !== 0 && removeEventListener(window, this._evWin, this.domHandler);
  }
}
