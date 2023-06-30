# Functions

### How passing arguments works: Values vs. Reference ****(VVVVI)

```javascript
const flight = 'LH234';
const sajib = {
  name: 'Sajib Mandal', 
  passport: 5783467456787
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 5783467456787) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, sajib);
console.log(flight); // LH234
console.log(sajib); // {name: 'Mr. Sajib Mandal', passport: 5783467456787}
```

Above flight value not change but sajib.name changed explain why?

In the provided code, the `checkIn` function takes two parameters: `flightNum` and `passenger`. It attempts to check in the passenger by modifying the values of these parameters.

In the function, `flightNum` is assigned a new value `'LH999'`, but this does not affect the original `flight` variable because `flightNum` is a separate variable that holds a copy of the value passed into the function. It does not have any connection to the original `flight` variable. `flight` is a primitive type.

On the other hand, `passenger.name` is modified by adding the prefix `'Mr. '` to the existing name. Since `passenger` is an object and objects are passed by reference in JavaScript, any changes made to the object inside the function will affect the original object outside the function. So, when the `checkIn` function modifies the `name` property of the `passenger` object, it directly modifies the original `sajib` object, resulting in the change `sajib.name = 'Mr. Sajib Mandal'`.

Therefore, after executing the `checkIn` function, the value of `flight` remains unchanged as `'LH234'`, but the `name` property of the `sajib` object is updated to `'Mr. Sajib Mandal'`.

### Javascript Primitive Types:
There are six primitive data types:

1. `undefined`: Represents an undefined value.
2. `null`: Represents a null value.
3. `boolean`: Represents a boolean value, either true or false.
4. `number`: Represents a numeric value, including integers and floating-point numbers.
5. `string`: Represents a sequence of characters, enclosed in single or double quotes.
6. `symbol`: Represents a unique identifier that is immutable and can be used as the key of an object property (added in ECMAScript 6).
Additionally, there is another primitive-like type called bigint, introduced in ECMAScript 2020, which represents integers with arbitrary precision.

```javascript
const undefinedValue = undefined;
const nullValue = null;
const booleanValue = true;
const numberValue = 42;
const stringValue = 'Hello, world!';
const symbolValue = Symbol('mySymbol');
const bigintValue = BigInt(123456789);

console.log(typeof undefinedValue); // output: 'undefined'
console.log(typeof nullValue); // output: 'object' (this is a known JavaScript quirk)
console.log(typeof booleanValue); // output: 'boolean'
console.log(typeof numberValue); // output: 'number'
console.log(typeof stringValue); // output: 'string'
console.log(typeof symbolValue); // output: 'symbol'
console.log(typeof bigintValue); // output: 'bigint'
```

### Javascript Reference Types:
Reference types are data types that are not primitive. They are also sometimes referred to as objects.

Reference types include:

1. `Object`: Represents a collection of key-value pairs, where values can be of any type, including other objects.
2. `Array`: Represents an ordered list of values, which can be of any type, including other objects and arrays.
3. `Function`: Represents a callable object that can be invoked with arguments.
4. `Date`: Represents a specific moment in time.
5. `RegExp`: Represents a regular expression for pattern matching.
6. `Map`, `Set`, and other built-in collection classes: Represents specialized data structures for storing and manipulating collections of values.

```javascript
const person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'traveling'],
  address: {
    street: '123 Main St',
    city: 'Exampleville'
  }
};

const numbers = [1, 2, 3, 4, 5];

function greet() {
  console.log('Hello, world!');
}

const today = new Date();

const regex = /[a-z]+/;

console.log(typeof person); // output: 'object'
console.log(typeof numbers); // output: 'object'
console.log(typeof greet); // output: 'function'
console.log(typeof today); // output: 'object'
console.log(typeof regex); // output: 'object'
```

### What Are The Difference Between Primitive and Reference Types:
There are several key differences between primitive types and reference types in JavaScript:

1. **`Memory Allocation`**: Primitive types are stored directly in memory, whereas reference types are stored as references to memory locations. When you assign a primitive value to a variable, the actual value is assigned. When you assign a reference type to a variable, the reference to the object's location in memory is assigned.

2. **`Mutability`**: Primitive types are immutable, meaning their values cannot be changed once they are created. Any operation that appears to modify a primitive type actually creates a new value. Reference types, on the other hand, are mutable. You can modify their properties and values without creating a new object.

3. **`Passing by Value vs. Passing by Reference`**: When you pass a primitive type as a function argument, it is passed by value, meaning a copy of the value is created and passed to the function. Modifying the parameter inside the function does not affect the original value. When you pass a reference type as a function argument, it is passed by reference, meaning the function receives a reference to the original object. Modifying the object inside the function affects the original object.

4. **`Comparison`**: Primitive types are compared by value. Two primitive values with the same value are considered equal. Reference types, on the other hand, are compared by reference. Two reference values are considered equal only if they refer to the same memory location.

5. **`Type Checking`**: The `typeof` operator can be used to determine the primitive type of a variable (`'undefined'`, `'boolean'`, `'number'`, `'string'`, `'symbol'`, or `'bigint'`). Reference types are all considered `'object'` by the `typeof` operator, except for functions, which are identified as `'function'`.

6. **`Existence`**: Primitive types have a defined existence even if their values are `undefined` or `null`. Reference types, however, can have a value of `null` or be `undefined` when they have not been assigned an object reference.

Understanding these differences is important for working with JavaScript data types effectively and avoiding unexpected behavior in your code.

