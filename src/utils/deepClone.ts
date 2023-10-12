import { Assignable } from "../types"

// clones object
export function deepClone<T>(object: T): T {
  // for primitives
  if (object === null || typeof object !== 'object') return object

  // for arrays
  if (Array.isArray(object)) {
    return (object as Array<unknown>).map(item => deepClone(item)) as T
  }

  // for objects
  const newObject: Record<keyof Assignable, any> = {}

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      newObject[key] = deepClone(object[key])
    }
  }

  return newObject as T
} 
