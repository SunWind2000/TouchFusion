import type { Point2D } from './base';
import type { INPUT_STATE, RECOGNIZER_TYPE } from '@/constants';

export interface Input {
  /**
   * 事件发生时间.
   */
  timestamp: number;
  /**
   * 事件持续时间.
   */
  deltaTime: number;
  /**
   * 触摸点水平方向位移巨鹿.
   */
  deltaX: number;
  /**
   * 触摸点垂直方向位移巨鹿.
   */
  deltaY: number;
  /**
   * 手势滑动角度.
   */
  angle: number;
  /**
   * 手势滑动距离.
   */
  distance: number;
  /**
   * 手势偏移方向.
   */
  offsetDirection: number;
  /**
   * 手势滑动方向.
   */
  direction: number;
  /**
   * 手势滑动速度.
   */
  velocity: number;
  /**
   * 手势水平方向滑动速度.
   */
  velocityX: number;
  /**
   * 手势垂直方向滑动速度.
   */
  velocityY: number;
  /**
   * 手势整体水平滑动速度.
   */
  overallVelocityX: number;
  /**
   * 手势整体垂直滑动速度.
   */
  overallVelocityY: number;
  /**
   * 手势整体滑动速度.
   */
  overallVelocity: number;
  /**
   * 手势捏合缩放比例.
   */
  scale: number;
  /**
   * 手势旋转角度.
   */
  rotation: number;
  /**
   * 手势触摸点数量.
   */
  maxPointers: number;
  /**
   * 手势作用元素区域.
   */
  target: HTMLElement;
  /**
   * 手势触摸点中心坐标.
   */
  center: Point2D;
  /**
   * 原生浏览器事件.
   */
  srcEvent: Event;
  /**
   * 手势输入事件状态
   */
  eventType: INPUT_STATE;
  /**
   * 手势事件类型
   */
  type: RECOGNIZER_TYPE,
  /**
   * 触摸点数量.
   */
  pointers: TouchList,
  /**
   * 额外事件.
   */
  additionalEvent: string;
}
