import { describe, it, expect } from 'vitest';
import { InputUtil } from '@/input';
import { DIRECTION } from '@/constants';

describe('InputUtil', () => {
  it('should be defined', () => {
    expect(InputUtil).toBeDefined();
  });

  it('getDistance', () => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 3, y: 4 };
    expect(InputUtil.getDistance(p1, p2)).toBe(5);
  });

  it('getAngle', () => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 1, y: 1 };
    expect(InputUtil.getAngle(p1, p2)).toBe(45);
  });

  it('getDirection', () => {
    expect(InputUtil.getDirection(10, 20)).toBe(DIRECTION.Down);
  });

  it('getCenter', () => {
    const points = [{ x: 0, y: 0 }, { x: 2, y: 2 }];
    expect(InputUtil.getCenter(points)).toEqual({ x: 1, y: 1 });
  });

  it('getRotation', () => {
    const starts = [{ x: 0, y: 0 }, { x: 2, y: 2 }];
    const ends = [{ x: 1, y: 1 }, { x: -1, y: -1 }];
    expect(InputUtil.getRotation(starts, ends)).toBe(-90);
  });

  it('getScale', () => {
    const starts = [{ x: 0, y: 0 }, { x: 2, y: 2 }];
    const ends = [{ x: -1, y: -1 }, { x: 3, y: 3 }];
    expect(InputUtil.getScale(starts, ends)).toBe(2);
  });

  it('getVelocity', () => {
    expect(InputUtil.getVelocity(1000, 100, 100)).toEqual({x: 0.1, y: 0.1});
  });

});

