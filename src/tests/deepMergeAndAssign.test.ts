import { deepMergeAndAssign } from ".."

// all test are in ./deepMerge.test.ts

test('Mutable logic', () => {
  const a = {
    a: 1
  }
  const b = {
    a: 2
  }

  deepMergeAndAssign(a, b)

  expect(a.a).toBe(2)
})