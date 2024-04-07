import { describe, it, expect } from 'vitest';
import { bindFn } from '@/utils';

describe('utils/function', () => {
  it('bindFn', () => {
    const obj = {
      value: 1,
      fn: function() {
        return this.value;
      }
    };

    const fn = bindFn(obj.fn, obj);
    expect(fn()).toBe(1);
  });
});
