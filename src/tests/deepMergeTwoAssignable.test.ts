import { deepMergeTwoAssignable } from "../utils/deepMergeTwoAssignable"

test('rewrite primitive with primitive', () => {
  interface Person {
    age: number
  }

  const person1: Person = { age: 10 }
  const person2: Person = { age: 11 }

  const merged = deepMergeTwoAssignable<Person>(person1, person2)
  
  expect(merged.age).toBe(11)
})

test('rewrite primitive with object', () => {
  interface Car {
    brand: {
      name: string
    }
  }

  const car1 = { brand: 'Tesla' }
  const car2 = { brand: { name: 'Tesla' } }

  const merged = deepMergeTwoAssignable<Car>(car1, car2)

  expect(merged.brand.name).toBe('Tesla')
})

test('rewrite object with primitive', () => {
  interface Request {
    result: string
  }

  const request1 = { result: { status: 'ok' } }
  const request2 = { result: 'success' }

  const merged = deepMergeTwoAssignable<Request>(request1, request2)

  expect(merged.result).toBe('success')
})

test('merge two objects', () => {
  interface User {
    firstName: string
    lastName: string
  }

  const user1 = { firstName: 'Oleksii' }
  const user2 = { lastName: 'Pavlov' }

  const merged = deepMergeTwoAssignable<User>(user1, user2)

  expect(merged.firstName).toBe('Oleksii')
  expect(merged.lastName).toBe('Pavlov')
})

test('merge objects with methods', () => {
  interface Response {
    status: number
  }
  interface Stringified {
    json: () => string
  }

  interface StringifiedResponse extends Stringified, Response {}

  const response: Response = { status: 200 }
  const stringified: Stringified = { json: () => 'success' }

  const stringifiedResponse = deepMergeTwoAssignable<StringifiedResponse>(stringified, response)

  expect(stringifiedResponse.json()).toBe('success')
})