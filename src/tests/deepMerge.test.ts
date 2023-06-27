import { deepMerge } from ".."

test('Merge logic: rewrite primitive with primitive', () => {
  interface Person {
    age: number
  }

  const person1: Person = {
    age: 10
  }
  const person2: Person = {
    age: 11
  }

  const merged = deepMerge<Person>(person1, person2)

  expect(merged.age).toBe(11)
})

test('Merge logic: rewrite primitive with object', () => {
  interface Car {
    brand: {
      name: string
    }
  }

  const car1 = {
    brand: 'Tesla'
  }
  const car2 = {
    brand: {
      name: 'Tesla'
    }
  }

  const merged = deepMerge<Car>(car1, car2)

  expect(merged.brand.name).toBe('Tesla')
})

test('Merge logic: rewrite object with primitive', () => {
  interface Request {
    result: string
  }

  const request1 = {
    result: {
      status: 'ok'
    }
  }
  const request2 = {
    result: 'success'
  }

  const merged = deepMerge<Request>(request1, request2)

  expect(merged.result).toBe('success')
})

test('Merge logic: merge two objects', () => {
  interface User {
    firstName: string
    lastName: string
  }

  const user1 = {
    firstName: 'Oleksii'
  }
  const user2 = {
    lastName: 'Pavlov'
  }

  const merged = deepMerge<User>(user1, user2)

  expect(merged.firstName).toBe('Oleksii')
  expect(merged.lastName).toBe('Pavlov')
})

test('Immutable logic', () => {
  const a = {
    a: 1
  }
  const b = {
    a: 2
  }

  deepMerge(a, b)

  expect(a.a).toBe(1)
})