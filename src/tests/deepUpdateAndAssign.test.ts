import { deepUpdateAndAssign } from ".."

test('Mutable logic', () => {
  const a = {
    a: 1
  }
  const b = {
    a: 2
  }

  deepUpdateAndAssign(a, b)

  expect(a.a).toBe(2)
})