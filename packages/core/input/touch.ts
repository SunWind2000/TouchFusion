import { AbstractInput } from './abstract';
import { INPUT_STATE, INPUT_TYPE } from '@/constants';
import { uniqueArray } from '@/utils';

import type { Manager } from '@/manager';
import type { InputCallback } from './abstract';
import { hasParentNode } from '@/utils';

const TOUCH_INPUT_MAP = {
  touchstart: INPUT_STATE.Start,
  touchmove: INPUT_STATE.Move,
  touchend: INPUT_STATE.End,
  touchcancel: INPUT_STATE.Cancel
};

const TOUCH_TARGET_EVENTS = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];

export class TouchInput extends AbstractInput {

  private targetIds: Record<number, boolean>;

  constructor(manager: Manager, callback: InputCallback) {

    super(manager, callback);

    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
  }

  public handler(ev: TouchEvent) {
    const type = TOUCH_INPUT_MAP[ev.type as keyof typeof TOUCH_INPUT_MAP];

    const touches = this.getTouches(ev, type);
    if (!touches) {
      return;
    }

    this.callback(this.manager, type, {
      pointers: touches[0],
      changedPointers: touches[1],
      pointerType: INPUT_TYPE.Touch,
      srcEvent: ev
    });
  }

  /**
   * 获取触摸事件
   * @param ev 触摸事件
   * @param type 事件类型
   * @returns [allTouches, changedTouches]
   */
  private getTouches(ev: TouchEvent, type: INPUT_STATE): Touch[][] | null {
    const allTouches = Array.from(ev.touches);
    
    // when there is only one touch, the process can be simplified
    if (type & (INPUT_STATE.Start | INPUT_STATE.Move) && allTouches.length === 1) {
      const touch = allTouches[0];
      this.targetIds[touch.identifier] = true;
      return [allTouches, allTouches];
    }

    // get target touches from touches
    const targetTouches = allTouches.filter(touch => {
      return hasParentNode(touch.target as HTMLElement, this.target as HTMLElement);
    });

    // collect touches
    if (type === INPUT_STATE.Start) {
      for (let i = 0; i < targetTouches.length; i++) {
        this.targetIds[targetTouches[i].identifier] = true;
      }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    const changedTouches = Array.from(ev.changedTouches);
    const changedTargetTouches = [];
    for (let i = 0; i < targetTouches.length; i++) {
      if (this.targetIds[targetTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      }

      if (type === INPUT_STATE.End || type === INPUT_STATE.Cancel) {
        delete this.targetIds[changedTouches[i].identifier];
      }
    }

    if (!changedTargetTouches.length) {
      return null;
    }

    return [
      uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
      changedTargetTouches
    ];
  }
}
