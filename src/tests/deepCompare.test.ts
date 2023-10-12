import { deepCompare } from "../utils/deepCompare"

// Test case 1: Comparing two primitives
test('Comparing two primitives', () => {
  const object1 = 100
  const object2 = 100
  const object3 = 200
  
  expect(deepCompare(object1, object2)).toBe(true)
  expect(deepCompare(object1, object3)).toBe(false)
})

// Test case 2: Comparing two empty objects
test('Comparing two empty objects', () => {
  const object1 = {}
  const object2 = {}
  
  expect(deepCompare(object1, object2)).toBe(true)
})

// Test case 3: Comparing two objects with the same properties and values
test('Comparing two objects with the same properties and values', () => {
  const object1 = { a: 1, b: 2, c: { d: 3 } }
  const object2 = { a: 1, b: 2, c: { d: 3 } }

  expect(deepCompare(object1, object2)).toBe(true)
})

// Test case 4: Comparing two objects with different values
test('Comparing two objects with different values', () => {
  const object1 = { a: 1, b: 2 }
  const object2 = { a: 1, b: 3 }

  expect(deepCompare(object1, object2)).toBe(false)
})

// Test case 5: Comparing two objects with different keys
test('Comparing two objects with different keys', () => {
  const object1 = { a: 1, b: 2 }
  const object2 = { a: 1, c: 2 }

  expect(deepCompare(object1, object2)).toBe(false)
})

// Test case 6: Comparing objects with nested objects
test('Comparing objects with nested objects', () => {
  const object1 = { a: 1, b: { c: 2 } }
  const object2 = { a: 1, b: { c: 2 } }
  const object3 = { a: 1, b: { c: 3 } }

  expect(deepCompare(object1, object2)).toBe(true)
  expect(deepCompare(object1, object3)).toBe(false)
})

// Test case 7: Comparing objects with arrays
test('Comparing objects with arrays', () => {
  const object1 = { a: [1, 2, 3], b: { c: [4, 5] } }
  const object2 = { a: [1, 2, 3], b: { c: [4, 5] } }
  const object3 = { a: [1, 2, 3], b: { c: [4, 6] } }

  expect(deepCompare(object1, object2)).toBe(true)
  expect(deepCompare(object1, object3)).toBe(false)
})

// Test case 8: Comparing objects with null and undefined values
test('Comparing objects with null and undefined values', () => {
  const object1 = { a: null, b: undefined }
  const object2 = { a: null, b: undefined }
  const object3 = { a: null, b: 'defined' }
  const object4 = { a: 'not null', b: undefined}

  expect(deepCompare(object1, object2)).toBe(true)
  expect(deepCompare(object1, object3)).toBe(false)
  expect(deepCompare(object1, object4)).toBe(false)
})

// Test case 9: Comparing objects with the same reference
test('Comparing objects with the same reference', () => {
  const object1 = { a: 0, b: 0 }
  const object2 = object1

  expect(deepCompare(object1, object2)).toBe(true)
})