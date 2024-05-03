import {
  Recognizer,
  RECOGNIZER_STATE,
  RECOGNIZER_TYPE,
  PressRecognizer,
  PanRecognizer,
  SwipeRecognizer,
  PinchRecognizer,
  RotateRecognizer,
  IRecognizerOptions
} from '@/recognizer';
import { createInputInstance } from '@/input';
import { each } from '@/utils';
import { DEFAULT_OPTIONS, STOP_TYPE } from './constants';
import { TouchAction } from './touch-action';

import type { AbstractInput, InputData } from '@/input';
import type { IManagerOptions, IManager, IManagerSession } from './types';

export class Manager implements IManager {
  private _element: HTMLElement;
  private _options: Required<IManagerOptions>;
  private _recognizers: Recognizer[];
  private _session: IManagerSession;
  private _input: AbstractInput;
  private _oldCssProps: Record<string, any>;
  private _touchAction: TouchAction;
  private handlers: Record<RECOGNIZER_TYPE, (data: InputData) => unknown>;
  
  constructor(element: HTMLElement, options?: IManagerOptions) {
    this._element = element;
    this._options = { ...DEFAULT_OPTIONS, ...options } as Required<IManagerOptions>;
    this._options.inputTarget = options?.inputTarget ?? this._element;
    
    this._recognizers = [];

    this._input = createInputInstance(this);

    this._session = {} as IManagerSession;

    this.handlers = {} as Record<RECOGNIZER_TYPE, (data: InputData) => unknown>;

    this._touchAction = new TouchAction(this, this._options.touchActions);

    this._oldCssProps = {};
    this._toggleCssProps('add');
  }

  get element(): HTMLElement {
    return this._element;
  }

  get options(): IManagerOptions {
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

  /**
   * 获取当前管理器中的指定识别器
   * @param recognizer 
   * @returns 
   */
  public get(recognizer: RECOGNIZER_TYPE): Recognizer | null {
    return this._recognizers.find((item) => item.type === recognizer) || null;
  }

  public set(options: IManagerOptions): Manager {
    this._options = { ...this._options, ...options };

    if (options.touchActions) {
      this._touchAction.update();
    }
    if (options.inputTarget) {
      this._input.destroy();
      this._input.target = options.inputTarget;
      this._input.init();
    }

    return this;
  }

  /**
   * 给指定的识别器设置配置项
   * @param type 识别器类型
   * @param options 对应识别器配置
   * @returns 若设置成功则返回对英国识别器，若设置失败则返回 null
   */
  public setOptions(type: RECOGNIZER_TYPE, options: IRecognizerOptions): Recognizer | null {
    const recognizer = this.get(type);
    if (recognizer) {
      recognizer.set(options);
    }
    return recognizer;
  }

  /**
   * 添加一个具有自定义配置的识别器覆盖默认识别器
   * @param recognizer 
   * @returns 当前存在的识别器列表
   */
  public add(recognizer: Recognizer): Recognizer[] {
    recognizer.manager = this;
    // 只能保留有一个同类型的识别器
    const index = this._recognizers.findIndex((item) => item.type === recognizer.type);
    if (index > -1) {
      this._recognizers.splice(index, 1);
    }
    this._recognizers.push(recognizer);
    this._touchAction.update();
    return this._recognizers;
  }

  /**
   * 移除识别器，并更新当前元素绑定的touchAction
   * @param recognizer 
   * @returns 
   */
  public remove(recognizer: Recognizer): Recognizer[] {
    const index = this._recognizers.findIndex((item) => item.type === recognizer.type);
    if (index > -1) {
      this._recognizers.splice(index, 1);
    }
    this._touchAction.update();
    return this._recognizers;
  }

  /**
   * 监听手势事件，当识别器识别到对应的手势时触发
   * 如果在此之前没有配置过自定义识别器，调用该方法会给管理器配置一个对应手势的默认识别器
   * @param recognizer 
   * @param handler 
   */
  public on(recognizer: RECOGNIZER_TYPE, handler: (data: InputData) => unknown): void {
    // 如果没有该识别器，则使用默认配置预设
    if (!this.get(recognizer)) {
      this._presetRecognizers(recognizer);
    }
    this.handlers[recognizer] = handler;
  }

  /**
   * 移除手势事件监听，同时移除对应的识别器
   * @param recognizer 
   */
  public off(recognizer: RECOGNIZER_TYPE[]): void {
    recognizer.forEach((item) => {
      delete this.handlers[item];
      // 同时移除识别器
      const rec = this.get(item);
      if (rec) {
        this.remove(rec);
      }
    });
  }

  /**
   * 销毁管理器，同时移除元素上的事件监听器，以及绑定的CSS属性
   */
  public destroy(): void { 
    this._toggleCssProps('remove');
    this._recognizers = [];
    this._input.destroy();
    this._session = {} as IManagerSession;
    this.handlers = {} as Record<RECOGNIZER_TYPE, (data: InputData) => unknown>;
  }

  /**
   * Run the recognizers. Called by the inputHandler function on every movement of the pointers.
   * It works by calling the recognize method of each recognizer.
   * If the recognizer recognizes the input, it will call the emit method of the recognizer.
   * @param input The data from the inputHandler.
   */
  public recognize(input: InputData): void {
    if (this._session.stopped) {
      return;
    }

    this.touchAction.preventDefault(input);

    let { curRecognizer } = this._session;
    if (
      !curRecognizer || 
      (curRecognizer && (curRecognizer.state & RECOGNIZER_STATE.Ended))
    ) {
      curRecognizer = this._session.curRecognizer = null;
    }

    for (let i = 0; i < this._recognizers.length; i++) {
      const recognizer = this._recognizers[i];
      if (
        this._session.stopped !== STOP_TYPE.ForceStop &&
        (!curRecognizer || recognizer === curRecognizer || recognizer.canRecognizeWith(curRecognizer))
      ) {
        recognizer.recognize(input);
      } else {
        recognizer.reset();
      }

      if (
        !curRecognizer &&
        (recognizer.state & (RECOGNIZER_STATE.Began | RECOGNIZER_STATE.Changed | RECOGNIZER_STATE.Ended))
      ) {
        curRecognizer = this._session.curRecognizer = recognizer;
      }
    }
  }

  /**
   * 由各个识别器调用，触发对应的手势事件回调
   * @param type Touch event type
   * @param input input data
   */
  public emit(type: RECOGNIZER_TYPE, input: InputData): void {
    const handler = this.handlers[type];

    input.type = type;
    input.preventDefault = () => {
      input.srcEvent?.preventDefault();
    };
    
    if (handler) {
      handler(input);
    }
  }

  /**
   * 清空当前管理器的session
   */
  public clearSession(): void {
    this._session = {} as IManagerSession;
  }

  private _toggleCssProps(action: 'add' | 'remove') {
    if (!this._options.cssProps || !this._element.style) {
      return;
    }
    each(this._options.cssProps, (value, prop) => {
      if (action === 'add') {
        this._oldCssProps[prop as any] = this._element.style[prop as keyof CSSStyleDeclaration];
        this._element.style[prop as any] = value as any;
      } else {
        this._element.style[prop as any] = this._oldCssProps[prop as any] || '';
      }
    });
    if (action !== 'add') {
      this._oldCssProps = {};
    }
  }

  private _presetRecognizers(type: RECOGNIZER_TYPE) {
    switch (type) {
      case RECOGNIZER_TYPE.Press:
        this.add(new PressRecognizer());
        break;
      case RECOGNIZER_TYPE.Pan:
        this.add(new PanRecognizer());
        break;
      case RECOGNIZER_TYPE.Swipe:
        this.add(new SwipeRecognizer());
        break;
      case RECOGNIZER_TYPE.Pinch:
        this.add(new PinchRecognizer());
        break;
      case RECOGNIZER_TYPE.Rotate:
        this.add(new RotateRecognizer());
        break;
      default:
        break;
    }
  }
}
