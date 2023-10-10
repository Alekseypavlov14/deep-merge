import { deepMergeTwoAssignable } from "./deepMergeTwoAssignable"
import { Assignable } from "../types"

// merges two assignable by updating values without type changing and with mutating
export function deepUpdateAndAssign<T extends Assignable = Assignable>(target: T, ...sources: Partial<T>[]): T {
  // return target which is updated by all sources
  return sources.reduce(deepMergeTwoAssignable, target) as T
}