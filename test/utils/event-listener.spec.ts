import { describe, it, expect } from 'vitest';
import { addEventListener, removeEventListener } from '@/utils';

describe('utils/event-listener', () => {
  it('addEventListener', () => {
    const el = document.createElement('div');
    let i = 1;
    const handler = () => {
      i ++;
    };
    addEventListener(el, ['click', 'mousedown'], handler);
    el.click();
    expect(i).toBe(2);
    el.click();
    expect(i).toBe(3);
  });

  it('removeEventListener', () => {
    const el = document.createElement('div');
    let i = 1;
    const handler = () => {
      i ++;
    };
    addEventListener(el, ['click', 'mousedown'], handler);
    el.click();
    expect(i).toBe(2);
    removeEventListener(el, ['click', 'mousedown'], handler);
    el.click();
    expect(i).toBe(2);
  });
});
