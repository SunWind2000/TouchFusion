import { DIRECTION } from './constants';

import type { Point2D } from './types';

export class InputUtil {

  /**
   * 计算从起始点到终点的角度
   * @param p1 
   * @param p2 
   * @returns 
   */
  public static getAngle(p1: Point2D, p2: Point2D): number {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
  }

  /**
   * 计算从起始点到终点的距离
   * @param p1 
   * @param p2 
   * @returns 
   */
  public static getDistance(p1: Point2D, p2: Point2D): number {
    const x = p2.x - p1.x;
    const y = p2.y - p1.y;
    return Math.sqrt(x * x + y * y);
  }

  /**
   * 计算从起始点到终点的移动方向
   * @param p1 
   * @param p2 
   * @returns 
   */
  public static getDirection(x: number, y: number): DIRECTION {
    if (x === y) {
      return DIRECTION.None;
    }
    if (Math.abs(x) >= Math.abs(y)) {
      return x < 0 ? DIRECTION.Left : DIRECTION.Right;
    }
    return y < 0 ? DIRECTION.Up : DIRECTION.Down;
  }

  /**
   * 计算多个像素点的中心
   * @param points 
   * @returns 
   */
  public static getCenter(points: Point2D[]): Point2D {
    const x = Math.round(points.reduce((acc, p) => acc + p.x, 0) / points.length);
    const y = Math.round(points.reduce((acc, p) => acc + p.y, 0) / points.length);
    return { x, y };
  } 

  /**
   * 计算旋转角度
   * @param starts 
   * @param ends 
   * @returns 
   */
  public static getRotation(starts: Point2D[], ends: Point2D[]): number {
    return this.getAngle(ends[1], ends[0]) + this.getAngle(starts[1], starts[0]);
  }

  /**
   * 计算缩放比例
   * @param starts 
   * @param ends 
   * @returns 
   */
  public static getScale(starts: Point2D[], ends: Point2D[]): number {
    return this.getDistance(ends[0], ends[1]) / this.getDistance(starts[0], starts[1]);
  }

  /**
   * 计算速度
   * @param deltaTime 
   * @param distance 
   * @returns { x: velX, y: velY }
   */
  public static getVelocity(deltaTime: number, x: number, y: number): { x: number, y: number } {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }
}
