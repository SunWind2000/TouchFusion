import { AbstractInput } from './abstract';
import { INPUT_STATE, INPUT_TYPE } from './constants';

import type { Manager } from '@/manager';
import type { InputCallback } from './abstract';

const POINTER_EVENT_INPUT_MAP = {
  pointerdown: INPUT_STATE.Start,
  pointermove: INPUT_STATE.Move,
  pointerup: INPUT_STATE.End,
  pointercancel: INPUT_STATE.Cancel,
  pointerout: INPUT_STATE.Cancel
};
const POINTER_ELEMENT_EVENTS = ['pointerdown'];
const POINTER_WINDOW_EVENTS = ['pointermove', 'pointerup', 'pointercancel'];

export class PointerEventInput extends AbstractInput {

  private _store: PointerEvent[];
  
    constructor(manager: Manager, callback: InputCallback) {
      super(manager, callback);
      this.evEl = POINTER_ELEMENT_EVENTS;
      this.evWin = POINTER_WINDOW_EVENTS;
      this._store = [];
  
      this.init();
    }
  
    public handler(ev: PointerEvent) {
      const eventType = POINTER_EVENT_INPUT_MAP[ev.type as keyof typeof POINTER_EVENT_INPUT_MAP];
      const isTouch = ev.pointerType === INPUT_TYPE.Touch;
      let storeIndex = this._store.findIndex((pEv) => pEv.pointerId === ev.pointerId);
      let shouldRemovePointer = false;

      // start and mouse must be down
      if (
        (eventType & INPUT_STATE.Start) &&
        (ev.button === 0 || isTouch)
      ) {
        if (storeIndex === -1) {
          this._store.push(ev);
          storeIndex = this._store.length - 1;
        }
      } else if (
        eventType & (INPUT_STATE.End | INPUT_STATE.Cancel)
      ) {
        shouldRemovePointer = true;
      }

      // it not found, so the pointer hasn't been down (so it's probably a hover)
      if (storeIndex === -1) {
        return;
      }
      this._store[storeIndex] = ev;
  
      this.callback(this.manager, eventType, {
        pointers: this._store,
        changedPointers: [ev],
        pointerType: ev.pointerType as INPUT_TYPE,
        srcEvent: ev
      });

      if (shouldRemovePointer) {
        this._store.splice(storeIndex, 1);
      }
    }
}
