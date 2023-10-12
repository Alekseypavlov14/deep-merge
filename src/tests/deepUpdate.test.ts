import { deepUpdate } from "../utils/deepUpdate"

// this test file extends deepMergeTwoAssignable.test.ts

test('update logic', () => {
  interface Person {
    age: number
  }

  const person1: Person = { age: 10 }
  const person2: Person = { age: 11 }

  const merged = deepUpdate(person1, person2)

  expect(merged.age).toBe(11)
})

test('Immutable logic', () => {
  const a = { a: 1 }
  const b = { a: 2 }

  deepUpdate(a, b)
  
  expect(a.a).toBe(1)
})