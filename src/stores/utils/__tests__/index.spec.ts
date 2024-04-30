import { describe, expect, it } from 'vitest'
import { mergeDeepButReplaceArray } from '../'

describe('mergeDeepButReplaceArray', () => {
  it('should merge two objects deeply and not modify the original objects', () => {
    const obj1 = { a: { b: { c: 1 } } }
    const obj2 = { a: { b: { d: 2 } } }
    mergeDeepButReplaceArray(obj1, obj2)
    expect(obj1).toEqual({ a: { b: { c: 1, d: 2 } } })
    expect(obj2).toEqual({ a: { b: { d: 2 } } })
  })

  it('should replace arrays if they exist in both objects', () => {
    const obj1 = { a: [1, 2, 3] }
    const obj2 = { a: [4, 5, 6] }
    mergeDeepButReplaceArray(obj1, obj2)
    expect(obj1).toEqual({ a: [4, 5, 6] })
    expect(obj1).toEqual({ a: [4, 5, 6] })
  })
})
