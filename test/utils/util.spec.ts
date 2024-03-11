import { describe, it, expect } from 'vitest'
import { generateId } from '@/utils'

describe('utils/util', () => {
  it('generateId', () => {
    const id1 = generateId('test');
    const id2 = generateId('test');
    expect(id1).toMatch(/^test-\d+-\d+$/);
    expect(id2).toMatch(/^test-\d+-\d+$/);
    expect(id1).not.toBe(id2);
  })
});
