import { deepMergeTwoAssignable } from "./deepMergeTwoAssignable"
import { Assignable } from "../types"

// merges two objects with type changing and mutating
export function deepMergeAndAssign<T extends Assignable = Assignable>(target: Assignable, ...sources: Assignable[]) {
  // return target which is merged with all sources
	return sources.reduce(deepMergeTwoAssignable, target) as T
}