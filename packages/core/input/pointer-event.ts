import { AbstractInput } from './abstract';
import { INPUT_STATE, INPUT_TYPE } from '@/constants';

import type { Manager } from '@/core/manager';
import type { InputCallback } from './abstract';

const POINTER_EVENT_INPUT_MAP = {
  pointerdown: INPUT_STATE.Start,
  pointermove: INPUT_STATE.Move,
  pointerup: INPUT_STATE.End,
  pointercancel: INPUT_STATE.Cancel,
  pointerout: INPUT_STATE.Cancel
};
const POINTER_ELEMENT_EVENTS = ['pointerdown'];
const POINTER_WINDOW_EVENTS = ['pointermove', 'pointerup', 'pointercancel', 'pointerout'];

export class PointerEventInput extends AbstractInput {
  
    constructor(manager: Manager, callback: InputCallback) {
      super(manager, callback);
      this.evEl = POINTER_ELEMENT_EVENTS;
      this.evWin = POINTER_WINDOW_EVENTS;
    }
  
    public handler(ev: PointerEvent) {
      const eventType = POINTER_EVENT_INPUT_MAP[ev.type as keyof typeof POINTER_EVENT_INPUT_MAP];
  
      this.callback(this.manager, eventType, {
        pointers: [ev],
        changedPointers: [ev],
        pointerType: INPUT_TYPE.Touch,
        srcEvent: ev
      });
    }
}
