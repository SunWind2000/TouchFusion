import type { ManagerOptions, RECOGNIZER_TYPE, STOP_TYPE } from '@/constants';
import type { Input } from './input';
import type { Recognizer } from '@/core/recognizer';
import type { TouchAction } from '@/core/touch-action';

export interface IManagerSession {
  prevented: boolean;
  stopped: STOP_TYPE;
  curRecognizer: Recognizer | null;
}

type TouchActionCallback = (input: Input) => unknown;

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
  options: ManagerOptions;
  /**
   * @description 识别器列表.
   */
  recognizers: Recognizer[];
  /**
   * @description 事件状态.
   */
  session: IManagerSession;
  /**
   * @description 触摸事件.
   */
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
  set: (options: ManagerOptions) => void;
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
  on: (recognizer: RECOGNIZER_TYPE[], handler: TouchActionCallback) => void;
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
  emit: (type: string, input: Input) => void;
  /**
   * @description 识别手势事件.
   * @private
   * @param input 手势动作相关信息.
   */
  recognize: (input: Input) => void;
  /**
   * @description 销毁事件实例.
   */
  destroy: () => void
}
