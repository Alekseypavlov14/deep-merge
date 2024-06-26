export function deepCompareTwoAssignable(object1: any, object2: any) {
  // for primitives
  if (object1 === object2) return true

  // for null (typeof null === 'object')
  if (object1 === null || object2 === null) return (object1 === null && object2 === null)

  // if one of objects is not an object
  if (typeof object1 !== 'object' || typeof object2 !== 'object') return false

  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepCompareTwoAssignable(object1[key], object2[key])) {
      return false
    }
  }

  return true
}
