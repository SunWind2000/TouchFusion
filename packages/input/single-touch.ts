import { AbstractInput } from './abstract';
import { INPUT_STATE, INPUT_TYPE } from './constants';
import { uniqueArray } from '@/utils';

import type { Manager } from '@/manager';
import type { InputCallback } from './abstract';

const SINGLE_TOUCH_INPUT_MAP = {
  touchstart: INPUT_STATE.Start,
  touchmove: INPUT_STATE.Move,
  touchend: INPUT_STATE.End,
  touchcancel: INPUT_STATE.Cancel
};

const SINGLE_TOUCH_TARGET_EVENTS = ['touchstart'];
const SINGLE_TOUCH_WINDOW_EVENTS = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];

export class SingleTouchInput extends AbstractInput {

  private started: boolean;

  constructor(manager: Manager, callback: InputCallback) {

    super(manager, callback);

    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    this.init();
  }

  public handler(ev: TouchEvent) {
    const type = SINGLE_TOUCH_INPUT_MAP[ev.type as keyof typeof SINGLE_TOUCH_INPUT_MAP];

    if (type === INPUT_STATE.Start) {
      this.started = true;
    }

    if (!this.started) {
      return;
    }

    const touches = this.normalizeSingleTouches(ev, type);
    if (!touches) {
      return;
    }

    if (
      (type === INPUT_STATE.End || type === INPUT_STATE.Cancel) &&
      touches[0].length - touches[1].length === 0
    ) {
      this.started = false;
    }

    this.callback(this.manager, type, {
      pointers: touches[0],
      changedPointers: touches[1],
      pointerType: INPUT_TYPE.Touch,
      srcEvent: ev
    });
  }

  private normalizeSingleTouches(ev: TouchEvent, type: INPUT_STATE): Touch[][] | null {
    let allTouches = Array.from(ev.touches);
    const changedTouches = Array.from(ev.changedTouches);

    if (type === INPUT_STATE.End || type === INPUT_STATE.Cancel) {
      allTouches = uniqueArray(allTouches.concat(changedTouches), 'identifier', true);
    }
    return [
      allTouches,
      changedTouches
    ];
  }
}
