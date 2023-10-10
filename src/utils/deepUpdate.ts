import { deepMergeTwoAssignable } from "./deepMergeTwoAssignable"
import { Assignable } from "../types"

// merges two assignable by updating values without type changing and mutating
export function deepUpdate<T extends Assignable = Assignable>(target: T, ...sources: Partial<T>[]): T {
  // create copy to leave target immutable
  const targetCopy = structuredClone(target)
  // return target which is updated by all sources
  return sources.reduce(deepMergeTwoAssignable, targetCopy) as T
}