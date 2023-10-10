import { Assignable } from "../types"

export function deepCompareTwoAssignable(object1: Assignable, object2: Assignable) {
  // for primitives
  if (object1 === object2) return true

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
