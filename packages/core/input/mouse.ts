import { AbstractInput } from './abstract';
import { INPUT_STATE, INPUT_TYPE } from '@/constants';

import type { Manager } from '@/manager';
import type { InputCallback } from './abstract';

const MOUSE_INPUT_MAP = {
  mousedown: INPUT_STATE.Start,
  mousemove: INPUT_STATE.Move,
  mouseup: INPUT_STATE.End
};

const MOUSE_ELEMENT_EVENTS = ['mousedown'];
const MOUSE_WINDOW_EVENTS = ['mousemove', 'mouseup'];

export class MouseInput extends AbstractInput {

  private pressed: boolean = false;

  constructor(manager: Manager, callback: InputCallback) {

    super(manager, callback);
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false;
  }

  public handler(ev: MouseEvent) {
    const eventType = MOUSE_INPUT_MAP[ev.type as keyof typeof MOUSE_INPUT_MAP];

    // on start we want to have the left mouse button down
    if (
      eventType === INPUT_STATE.Start &&
      ev.button === 0
    ) {
      this.pressed = true;
    }

    // mouse must be down
    if (!this.pressed) {
      return;
    }

    if (eventType === INPUT_STATE.End) {
      this.pressed = false;
    }

    this.callback(this.manager, eventType, {
      pointers: [ev],
      changedPointers: [ev],
      pointerType: INPUT_TYPE.Mouse,
      srcEvent: ev
    });
  }
}
