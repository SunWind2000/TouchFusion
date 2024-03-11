import { describe, it, expect } from 'vitest';
import {
  isBoolean,
  isNumber,
  isFunction,
  isObject,
  isArray
} from '@/utils';

describe('utils/is', () => {
  it('isBoolean', () => {
    expect(isBoolean(false)).toBe(true);
  });

  it('isNumber', () => {
    expect(isNumber(1)).toBe(true);
  });

  it('isFunction', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(new Function())).toBe(true);
    expect(isFunction(1)).not.toBe(true);
  });

  it('isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(null)).not.toBe(true);
    expect(isObject(undefined)).not.toBe(true);
  });

  it('isArray', () => {
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
  });
});
