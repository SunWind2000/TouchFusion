import { isBoolean } from '@/utils';
import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL } from '@/constants';

import type { IActions } from '@/constants';
import type { IManager, IRecognizer, InputData } from '@/types';

export class TouchAction {
  private manager: IManager;
  private actions: IActions[];

  constructor(manager: IManager, value: IActions[]) {
    this.manager = manager;
    this.actions = [...value];
    this.set(value);
  }

  /**
   * @description set the touchAction value on the element
   * @param value touchActions of browser supported
   */
  public set(value: IActions[]) {
    const touchAction = value.join(' ');
    this.manager.element.style.touchAction = touchAction.toLowerCase().trim();
  }

  /**
   * @description update the touchAction value on the element
   */
  public update() {
    if (this.manager.options.touchActions) {
      this.set([
        ...this.manager.options.touchActions
      ]);
    }
  }

  /**
   * @description compute the touchAction value based on the recognizer's settings
   * @returns value of touchAction
   */
  public compute() {
    let actions: IActions[] = []; 
    this.manager.recognizers.forEach((recognizer: IRecognizer) => {
      if (
        isBoolean(recognizer.options.enable) &&
        recognizer.options.enable
      ) {
        actions = actions.concat(recognizer.getTouchAction());
      }
    });
    return this.cleanTouchActions(actions);
  }

  /**
   * @description prevent the browser default actions
   * @param input input of the recognizer
   */
  public preventDefault(input: InputData) {
    const { srcEvent } = input;
    const direction = input.offsetDirection;

    if (this.manager.session.prevented) {
      srcEvent.preventDefault();
      return;
    }

    const hasNone = this.actions.includes('none');
    const hasPanX = this.actions.includes('pan-x');
    const hasPanY = this.actions.includes('pan-y');

    if (hasNone) {
      const isTapPointer = input.pointers.length === 1;
      const isTapMovement = input.distance < 2;
      const isTapTouchTime = input.deltaTime < 250;

      if (isTapPointer && isTapMovement && isTapTouchTime) {
        return;
      }
    }

    if (hasPanX && hasPanY) {
      return;
    }

    if (
      hasNone ||
      (hasPanX && direction === DIRECTION_HORIZONTAL) ||
      (hasPanY && direction === DIRECTION_VERTICAL)
    ) {
      return this.preventSrc(srcEvent);
    }
  }

  /**
   * @description clean the invalid touchAction value
   * @param actions actions of user defined
   * @returns 
   */
  private cleanTouchActions(actions: IActions[]) {
    if (actions.includes('none')) {
      return 'none';
    }

    const hasPanX = actions.includes('pan-x');
    const hasPanY = actions.includes('pan-y');
    if (hasPanX && hasPanY) {
      return 'none';
    }
    if (hasPanX || hasPanY) {
      return hasPanX ? 'pan-x' : 'pan-y';
    }

    if (actions.includes('manipulation')) {
      return 'manipulation';
    }

    return 'auto';
  }

  /**
   * 
   * @description call preventDefault to prevent the browser's default behavior (scrolling in most cases)
   * @param srcEvent 
   */
  private preventSrc(srcEvent: Event) {
    this.manager.session.prevented = true;
    srcEvent.preventDefault();
  }
}
