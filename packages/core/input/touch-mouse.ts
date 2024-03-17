import { INPUT_STATE, INPUT_TYPE} from '@/constants';
import { MouseInput } from './mouse';
import { TouchInput } from './touch';

import type { Manager } from '@/manager';
import type { InputData, Point2D } from '@/types';

const DEDUP_TIMEOUT = 2500;
const DEDUP_DISTANCE = 25;

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 */
export class TouchMouseInput {

  private _primaryTouch: number | null;
  private _lastTouches: Point2D[];
  private _mouse: MouseInput;
  private _touch: TouchInput;

  constructor(manager: Manager) {

    this._mouse = new MouseInput(manager, this.handler);
    this._touch = new TouchInput(manager, this.handler);

    this._primaryTouch = null;
    this._lastTouches = [];
  }

  public handler(_manager: Manager, inputEvent: INPUT_STATE, inputData: InputData) {
    const isTouch = inputData.pointerType === INPUT_TYPE.Touch;
    const isMouse = inputData.pointerType === INPUT_TYPE.Mouse;

    // when we're in a touch event, record touches to  de-dupe synthetic mouse event
    if (isTouch) {
      this._recordTouches(inputEvent, inputData);
    } else if (isMouse && this._isSyntheticEvent(inputData)) {
      return;
    }
  }

  public destroy() {
    this._mouse.destroy();
    this._touch.destroy();
  }

  private _recordTouches(eventType: INPUT_STATE, eventData: InputData) {
    if (eventType === INPUT_STATE.Start) {
      this._primaryTouch = (eventData.changedPointers as Touch[])[0].identifier;
      this._setLastTouch(eventData);
    } else if (eventType === INPUT_STATE.End || eventType === INPUT_STATE.Cancel) {
      this._setLastTouch(eventData);
    }
  }

  private _setLastTouch(eventData: InputData) {
    const touch = (eventData.changedPointers as Touch[])[0];
    if (touch.identifier === this._primaryTouch) {
      const lastTouch = {
        x: touch.clientX,
        y: touch.clientY
      };
      this._lastTouches.push(lastTouch);

      const timer = setTimeout(() => {
        const index = this._lastTouches.indexOf(lastTouch);
        if (index > -1) {
          this._lastTouches.splice(index, 1);
        }
        clearTimeout(timer);
      }, DEDUP_TIMEOUT);
    }
  }

  private _isSyntheticEvent(eventData: InputData) {
    const srcEvent = eventData.srcEvent as MouseEvent;
    const x = srcEvent.clientX;
    const y = srcEvent.clientY;

    for (let i = 0; i < this._lastTouches.length; i++) {
      const lastTouch = this._lastTouches[i];
      const dx = Math.abs(x - lastTouch.x);
      const dy = Math.abs(y - lastTouch.y);

      if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
        return true;
      }
    }

    return false;
  }
}
