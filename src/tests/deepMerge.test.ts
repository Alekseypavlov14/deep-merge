import { deepMerge } from "../utils/deepMerge"

// this test file extends deepMergeTwoAssignable.test.ts

test('immutable logic', () => {
  const a = { a: 1 }
  const b = { a: 2 }

  deepMerge(a, b)

  expect(a.a).toBe(1)
})

test('merge more than two objects', () => {
  const a = { a: 0 }
  const b = { b: 0 } 
  const c = { c: 0 }

  const merged = deepMerge(a, b, c)
  
  expect(merged.c).toBe(0)
})