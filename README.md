# @oleksii-pavlov/deep-merge

This is a library for working with objects. It provides utilities to merge, update, clone and compare objects considering their nesting! This library is written in Typescript and its utilities save the typing of the objects. Functions which names are ended up with **AndAssign** mutate first argument!

## Documentation

**Utilities**:
- deepMerge
- deepUpdate
- deepMergeAndAssign
- deepUpdateAndAssign
- deepClone
- deepCompare

## Usage

#### **deepMerge** - for merging with type changing without mutating

Example:
```ts
import { deepMerge } from '@oleksii/deep-merge'

interface UserWithFirstName {
  firstName: string
}
interface UserWithLastName {
  lastName: string
}

// intersection type
type User = UserWithFirstName & UserWithLastName

const userWithFirstName: UserWithFirstName = {
  firstName: 'Oleksii'
}
const userWithLastName: UserWithLastName = {
  lastName: 'Pavlov'
}

// merge two objects
const user = deepMerge<User>(userWithFirstName, userWithLastName)

console.log(user) // { firstName: 'Oleksii', lastName: 'Pavlov' }
``` 

#### **deepUpdate** - for updating values without type changing without mutating

Example:
```ts
import { deepUpdate } from '@oleksii/deep-merge'

interface User {
  firstName: string
  lastName: string
  age: number
}

const user: User = {
  firstName: 'Oleksii'
  lastName: 'Pavlov'
  age: 30
}
const updatedUserData: Partial<User> = {
  age: 31
}

const updatedUser = deepUpdate(user, updatedUserData)

// updatedUser: User - type has not been changed
console.log(user) // not mutated: { firstName: 'Oleksii', lastName: 'Pavlov', age: 30 }
console.log(updatedUser) // updated: { firstName: 'Oleksii', lastName: 'Pavlov', age: 31 }
```

#### **deepMergeAndAssign** - for merging with type changing with mutating

Example:
```ts
import { deepMergeAndAssign } from '@oleksii/deep-merge'

interface UserWithFirstName {
  firstName: string
}
interface UserWithLastName {
  lastName: string
}

// intersection type
type User = UserWithFirstName & UserWithLastName

const userWithFirstName: UserWithFirstName = {
  firstName: 'Oleksii'
}
const userWithLastName: UserWithLastName = {
  lastName: 'Pavlov'
}

deepMergeAndAssign<User>(userWithFirstName, userWithLastName)

console.log(userWithFirstName) // userWithFirstName is mutated: { firstName: 'Oleksii', lastName: 'Pavlov' }
``` 

#### **deepUpdateAndAssign** - for updating values without type changing with mutating

Example:
```ts
import { deepUpdateAndAssign } from '@oleksii/deep-merge'

interface User {
  firstName: string
  lastName: string
  age: number
}

const user: User = {
  firstName: 'Oleksii'
  lastName: 'Pavlov'
  age: 30
}
const updatedUserData: Partial<User> = {
  age: 31
}

deepUpdateAndAssign(user, updatedUserData)

// user: User - type has not been changed
console.log(user) // user is mutated: { firstName: 'Oleksii', lastName: 'Pavlov', age: 31 }
```

#### **deepClone** - clones an object recursively

Example:
```ts
import { deepClone, deepCompare } from '@oleksii-pavlov/deep-merge'

const user = {
  name: 'Oleksii',
  surname: 'Pavlov',
  family: {
    numberOfSiblings: 2
  }
}

const clonedUser = deepClone(user)

console.log(user !== clonedUser) // true, different object
console.log(deepCompare(user, clonedUser)) // true, cloned object has the same structure
console.log(user.family !== clonedUser.family) // true, nested objects are recursively cloned as well
```

#### **deepCompare** compares objects (number of arguments in unlimited)

Example:
```ts
import { deepCompare } from '@oleksii-pavlov/deep-merge'

const user = {
  name: "Tom",
  address: {
    street: "Main street",
    apartments: 18
  }
}

const copiedUser = {
  name: "Tom",
  address: {
    street: "Main street",
    apartments: 18
  }
}

const userWithDifferentAddress = {
  name: "Tom",
  address: {
    street: "Main street",
    apartments: 21
  }
}

console.log(deepCompare(user, clonedUser)) // true as they are the same structured objects
console.log(deepCompare(user, userWithDifferentAddress)) // false as the addresses are different
```
