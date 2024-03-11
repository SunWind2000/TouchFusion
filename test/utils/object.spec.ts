import { describe, it, expect, vi } from 'vitest'
import { each, invokeArrayArg } from '@/utils'

describe('utils/object', () => {
  it('each', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }
    const arr = [1, 2, 3]
    const context = {
      a: 1
    }
    const iterator = vi.fn()
    each(obj, iterator, context)
    expect(iterator).toHaveBeenCalledTimes(3)
    expect(iterator).toHaveBeenNthCalledWith(1, 1, 'a', obj)
    expect(iterator).toHaveBeenNthCalledWith(2, 2, 'b', obj)
    expect(iterator).toHaveBeenNthCalledWith(3, 3, 'c', obj)
    iterator.mockClear()
    each(arr, iterator, context)
    expect(iterator).toHaveBeenCalledTimes(3)
    expect(iterator).toHaveBeenNthCalledWith(1, 1, 0, arr)
    expect(iterator).toHaveBeenNthCalledWith(2, 2, 1, arr)
    expect(iterator).toHaveBeenNthCalledWith(3, 3, 2, arr)
  })

  it('invokeArrayArg', () => {
    const context = {
      fn: vi.fn()
    }
    const arr = [1, 2, 3]
    invokeArrayArg(arr, 'fn', context)
    expect(context.fn).toHaveBeenCalledTimes(3)
    expect(context.fn).toHaveBeenNthCalledWith(1, 1, 0, arr)
    expect(context.fn).toHaveBeenNthCalledWith(2, 2, 1, arr)
    expect(context.fn).toHaveBeenNthCalledWith(3, 3, 2, arr)
    expect(invokeArrayArg(arr, 'fn', context)).toBe(true)
  })
})
