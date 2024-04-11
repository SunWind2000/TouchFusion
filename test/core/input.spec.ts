import { describe, it, expect } from 'vitest';
import { createInputInstance } from '@/input';
import { Manager } from '@/manager';

describe('core/input', () => {
  it('should create an input instance', () => {
    const el = document.createElement('div');
    const manager = new Manager(el);
    const input = createInputInstance(manager);
    expect(input).toBeDefined();
  });
});
