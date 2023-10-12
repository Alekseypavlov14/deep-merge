import { isAssignable } from "./isAssignable"
import { Assignable } from "../types"

// merges to assignable objects
export function deepMergeTwoAssignable<T extends Assignable = Assignable>(target: Assignable, source: Assignable): T {
  Object.keys(source).forEach(key => { // get all first layer keys
		if (isAssignable(target[key]) && isAssignable(source[key])) { // if both values are objects
			return deepMergeTwoAssignable(target[key], source[key]) // merge them recursively
		}
		// otherwise add or rewrite property
		target[key] = source[key]
	})
	// return changed target
	return target as T
}