# @oleksii-pavlov/deep-merge

The utility that merges two objects deeply. Functions do not mutate object but return updated copy.
Functions which names are ended up with **AndAssign** mutate first argument!

## Usage
---
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

// user: User - intersection of types
```

You can see that result type is different comparing to arguments. **You need to pass ResultType** as a type argument to get correct result.

## Documentation
---
### **functions**:
- deepMerge
- deepUpdate
- deepMergeAndAssign
- deepUpdateAndAssign

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

// user = { firstName: 'Oleksii', lastName: 'Pavlov' }
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

// user: User - type has not been changed
// user = { firstName: 'Oleksii', lastName: 'Pavlov', age: 31 }
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

// userWithFirstName is mutated!
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
// user is mutated!
```
