import { addEventListener, removeEventListener } from '@/utils';

import type { Manager } from '@/manager';

type InputCallback = (manager: Manager, eventType: string, input: Input) => void;

export abstract class Input {
  protected manager: Manager;
  protected el: HTMLElement;
  protected target: EventTarget | null;
  protected domHandler: (ev: Event) => void;
  protected callback: InputCallback;
  protected abstract evEl: string[];
  protected abstract evWin: string[];
  protected abstract evTarget: string[];

  constructor(manager: Manager, callback: InputCallback) {
    this.manager = manager;
    this.el = manager.element;
    this.target = manager.options.inputTarget!;
    this.callback = callback;

    this.domHandler = (ev: Event) => {
      if (this.manager.options.enable){
        this.handler(ev);
      }
    };

    this.init();
  }

  protected abstract handler(ev: Event): void;

  private init() {
    this.evEl.length !== 0 && addEventListener(this.el, this.evEl, this.domHandler);
    this.evTarget.length !== 0 && this.target && addEventListener(this.target, this.evTarget, this.domHandler);
    this.evWin.length !== 0 && addEventListener(window, this.evWin, this.domHandler);
  }

  public destroy() {
    this.evEl.length !== 0 && removeEventListener(this.el, this.evEl, this.domHandler);
    this.evTarget.length !== 0 && this.target && removeEventListener(this.target, this.evTarget, this.domHandler);
    this.evWin.length !== 0 && removeEventListener(window, this.evWin, this.domHandler);
  }
}
