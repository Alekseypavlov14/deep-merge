import { deepClone } from "../utils/deepClone"

test('should clone an empty object', () => {
  const originalObject = {}
  const clonedObject = deepClone(originalObject)

  expect(clonedObject).toEqual(originalObject)
  expect(clonedObject).not.toBe(originalObject)
});

test('should clone a simple object', () => {
  const originalObject = { a: 1, b: 'hello' }
  const clonedObject = deepClone(originalObject)

  expect(clonedObject).toEqual(originalObject)
  expect(clonedObject).not.toBe(originalObject)
});

test('should clone an array', () => {
  const originalArray = [1, 2, 3]
  const clonedArray = deepClone(originalArray)

  expect(clonedArray).toEqual(originalArray)
  expect(clonedArray).not.toBe(originalArray)
});

test('should clone an object with nested objects and arrays', () => {
  const originalObject = {
    a: 1,
    b: { c: 2, d: [3, 4] },
    e: [5, { f: 6 }],
  }
  const clonedObject = deepClone(originalObject)

  expect(clonedObject).toEqual(originalObject)
  expect(clonedObject).not.toBe(originalObject)
  expect(clonedObject.b).not.toBe(originalObject.b)
  expect(clonedObject.e[1]).not.toBe(originalObject.e[1])
})

test('should clone null and undefined values', () => {
  const originalObject = { a: null, b: undefined }
  const clonedObject = deepClone(originalObject)

  expect(clonedObject).toEqual(originalObject)
  expect(clonedObject).not.toBe(originalObject)
})
