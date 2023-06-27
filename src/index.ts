// assignable interface
interface Assignable {
  [key: string | number | symbol]: any
}

// merges two assignable with type changing without mutating
function deepMerge<T extends Assignable = Assignable>(...sources: Assignable[]) {
  const initialValue = structuredClone(sources[0])
  // return target which is merged with all sources
	return sources.reduce(deepMergeTwoAssignable, initialValue) as T
}

// merges two assignable by updating values without type changing and mutating
function deepUpdate<T extends Assignable = Assignable>(target: T, ...sources: Partial<T>[]): T {
  // create copy to leave target immutable
  const targetCopy = structuredClone(target)
  // return target which is updated by all sources
  return sources.reduce(deepMergeTwoAssignable, targetCopy) as T
}

// merges two objects with type changing and mutating
function deepMergeAndAssign<T extends Assignable = Assignable>(target: Assignable, ...sources: Assignable[]) {
  // return target which is merged with all sources
	return sources.reduce(deepMergeTwoAssignable, target) as T
}

// merges two assignable by updating values without type changing and with mutating
function deepUpdateAndAssign<T extends Assignable = Assignable>(target: T, ...sources: Partial<T>[]): T {
  // return target which is updated by all sources
  return sources.reduce(deepMergeTwoAssignable, target) as T
}

// merges to assignable objects
function deepMergeTwoAssignable(target: Assignable, source: Assignable): Assignable {
  Object.keys(source).forEach(key => { // get all first layer keys
		if (isAssignable(target[key]) && isAssignable(source[key])) { // if both values are objects
			return deepMergeTwoAssignable(target[key], source[key]) // merge them recursively
		}
		// otherwise add or rewrite property
		target[key] = source[key]
	})
	// return changed target
	return target
}

// check if assignable
function isAssignable(value: any): value is Assignable {
	return value?.constructor === Object
}

export {
  deepMerge,
  deepMergeAndAssign,
  deepUpdate,
  deepUpdateAndAssign
}