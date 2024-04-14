import type { Recognizer, RECOGNIZER_TYPE } from '@/recognizer';
import type { InputData, SimpleInputData, Point2D } from '@/input';
import type { STOP_TYPE } from './constants';
import type { TouchAction } from './touch-action';

export const ACTIONS = [
  'none',
  'pan-x',
  'pan-y',
  'auto',
  'manipulation',
  'compute'
] as const;

export type IActions = typeof ACTIONS[number];

export interface IManagerOptions {
  domEvents?: boolean;
  touchActions?: IActions[];
  /**
   * 是否阻止所有input事件的默认行为
   */
  preventDefault?: boolean;
  /**
   * 是否阻止所有input事件冒泡
   */
  stopPropagation?: boolean;
  /**
   * 是否阻止所有input事件立即停止
   */
  stopImmediatePropagation?: boolean;
  enable?: boolean;
  inputTarget?: Element | null;
  cssProps?: Partial<CSSStyleDeclaration>;
}

export interface IManagerSession {
  prevented: boolean;
  stopped: STOP_TYPE;
  curRecognizer: Recognizer | null;
  prevInput: InputData | null;
  prevDelta: Point2D | null;
  offsetDelta: Point2D | null;
  firstMultiple: SimpleInputData | null;
  firstInput: SimpleInputData | null;
  lastInterval: InputData | null;
}

type TouchActionCallback = (input: InputData) => unknown;

/**
 * @description Manager interface
 */
export interface IManager {
  /**
   * @description 事件绑定元素.
   */
  element: HTMLElement;
  /**
   * @description 事件配置.
   */
  options: IManagerOptions;
  /**
   * @description 识别器列表.
   */
  recognizers: Recognizer[];
  /**
   * @description 事件状态.
   */
  session: IManagerSession;
  touchAction: TouchAction;
  /**
   * @description 停止事件.
   * @param force 是否强制停止.
   */
  stop: (force: boolean) => void;
  /**
   * @description 设置事件配置.
   * @param options 事件配置.
   */
  set: (options: IManagerOptions) => void;
  /**
   * @description 获取识别器.
   * @param recognizer 识别器名称
   * @returns 识别器实例.
   */
  get: (recognizer: RECOGNIZER_TYPE) => Recognizer | null;
  /**
   * @description 添加识别器.
   * @param recognizer 识别器实例.
   */
  add: (recognizer: Recognizer) => void;
  /**
   * @description 移除识别器.
   * @param recognizer 识别器实例.
   */
  remove: (recognizer: Recognizer) => void;
  /**
   * @description 监听手势事件.
   * @param recognizer 手势类型名称.
   * @param handler 事件触发回调.
   */
  on: (recognizer: RECOGNIZER_TYPE, handler: TouchActionCallback) => void;
  /**
   * @description 取消监听手势事件.
   * @param recognizer 手势类型名称.
   */
  off: (recognizer: RECOGNIZER_TYPE[]) => void;
  /**
   * @description 调用事件回调.
   * @private
   * @param type 手势类型名称. 
   * @param input 手势动作相关信息.
   */
  emit: (type: RECOGNIZER_TYPE, input: InputData) => void;
  /**
   * @description 识别手势事件.
   * @private
   * @param input 手势动作相关信息.
   */
  recognize: (input: InputData) => void;
  /**
   * @description 销毁事件实例.
   */
  destroy: () => void
  /**
   * @description 清除事件状态.
   */
  clearSession: () => void;
}
