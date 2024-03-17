import { describe, it, expect } from 'vitest';
import { hasParentNode } from '@/utils';

describe('utils/dom', () => {
  it('hasParentNode', () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.appendChild(span);
    expect(hasParentNode(span, div)).toBe(true);
    expect(hasParentNode(span, document.body)).toBe(false);
  });
});
