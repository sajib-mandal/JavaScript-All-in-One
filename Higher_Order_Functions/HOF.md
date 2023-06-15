# Higher Order Functions
- In JavaScript, higher-order functions are functions that can take other functions as arguments or return functions as their results. They allow for a more functional programming style and enable powerful abstractions and code reusability. 

### Callback:
- A callback is a function which can be passed as parameter to other function.
```javascript
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3));
```

### Returning function:
Higher order functions return function as a value​,
```javascript
// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10));
```
Let us see were we use call back functions. For instance the forEach method uses call back.
```javascript
const numbers = [1, 2, 3, 4, 5];
const sumArray = arr => {
  let sum = 0;
  const callback = function(element) {
    sum += element;
  }
  arr.forEach(callback);
  return sum;

}
console.log(sumArray(numbers)); // 15
```

The above example can be simplified as follows:
```javascript
const numbers = [1, 2, 3, 4];
​
const sumArray = arr => {
  let sum = 0;
  arr.forEach(function(element) {
    sum += element;
  })
  return sum;

}
console.log(sumArray(numbers));
```

## forEach(callback):
- The `forEach` function is a higher-order function that allows you to iterate over the elements of an array and execute a provided function for each element. It is commonly used when you want to perform a certain operation on each item in an array without explicitly creating a new array.
- `continue` and `break` statement not work `forEach` loop.

The syntax of the forEach function is as follows:
```javascript
array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
```

Let's break down the parameters:

- `callback`: The function to execute on each element. It can take up to three arguments:
- `currentValue`: The current element being processed in the array.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array on which the `forEach` function was called.
- `thisArg` (optional): The value to use as `this` when executing the callback function.

Normal for-of loop.
```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 'for of' loop
for (const mov of movements) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
}
```

forEach loop
```javascript
                // callback function
movements.forEach(function(mov) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
});
```

### forEach With Maps and Sets:
- forEach also work map and set data structure.

Map:
```javascript
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

Output:
USD: United States dollar
EUR: Euro
GBP: Pound sterling
```

Set: 
- Sets `key` and `value` are same. Because sets does not have any `keys` and does not have `index` either.
```javascript
const currenciesUnique = new Set(['USD', 'TK', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function(cur, i) {
  console.log(`${i}: ${cur}`)
});

Output: 

USD: USD
TK: TK
EUR: EUR
```
