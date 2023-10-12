import { deepMergeAndAssign } from "../utils/deepMergeAndAssign"

// this test file extends deepMergeTwoAssignable.test.ts

test('mutable logic', () => {
  const a = { a: 1 }
  const b = { a: 2 }

  deepMergeAndAssign(a, b)
  
  expect(a.a).toBe(2)
})
