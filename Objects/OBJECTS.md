# Objects

```javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
```

### Destructuring Objects:
- Object order of the elements does not matter.
```javascript
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
/*
Classico Italiano 
{thu: {…}, fri: {…}, sat: {…}} 
(4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
*/
```

Variable name to be different from property names:
```javascript
const { name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);
/*
Classico Italiano 
{thu: {…}, fri: {…}, sat: {…}} 
(4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
*/
```

**`Nested Objects Destructuring`**
```javascript
const { open, close } = restaurant.openingHours.fri;
console.log(open, close); // 11, 23

const { fri: { open, close }} = restaurant.openingHours;
console.log(open, close); // 11 23
```

// Also you can set default name { open: o, close: c } 
const { fri: { open, close }} = restaurant.openingHours;
console.log(open, close); // 11 23
```

**`Default Values`**
- When variable name not define in the Objects. Thats why set default values. Othere wise it gives undefined.

```javascript
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
/*
[] 
['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
*/
```

**`Mutating Variables`**
```javascript
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
// const { a, b } = obj; // SyntaxError
// let { a, b } = obj; // SyntaxError
// { a, b } = obj; // SyntaxError: Unexpected token '='

({ a, b } = obj);
console.log(a, b); // 23, 7
```

# Looping Objects: Object Keys, Values, and Entries

### Using Property Names (also called keys) Object.keys():
- The `Object.keys()` is a built-in function that returns an array containing the keys of an object's enumerable properties. It extracts and returns an array of the property names (keys) of the object, in the same order as provided by a for...in loop. 

The syntax for using Object.keys() is as follows:
```javascript
Object.keys(obj)
```

Example:
```javascript
const person = {
  name: 'John',
  age: 30,
  occupation: 'Engineer'
};

const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'occupation']
```

### Using Object.values():
- The `Object.values()` is a built-in function that returns an array containing the values of an object's enumerable properties. It extracts and returns an array of the property values of the object, in the same order as provided by a for...in loop. 

The syntax for using Object.values() is as follows:
```javascript
Object.values(obj)
```

Example:
```javascript
const person = {
  name: 'John',
  age: 30,
  occupation: 'Engineer'
};

const values = Object.values(person);
console.log(values); // ['John', 30, 'Engineer']
```


### Using Object.entries():
- The Object.entries() is a built-in function that returns an array of an object's own enumerable property key-value pairs. It extracts and returns an array where each element is an array consisting of a property key and its corresponding value. The order of the key-value pairs in the resulting array is the same as provided by a for...in loop. 

The syntax for using Object.entries() is as follows:
```javascript
Object.entries(obj)
```

Example:
```javascript
const person = {
  name: 'John',
  age: 30,
  occupation: 'Engineer'
};

const entries = Object.entries(person);
console.log(entries); // [ ['name', 'John'], ['age', 30], ['occupation', 'Engineer'] ]
```
