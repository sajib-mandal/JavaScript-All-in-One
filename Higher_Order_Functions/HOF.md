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

### forEach():
- The `forEach` function is a higher-order function that allows you to iterate over the elements of an array and execute a provided function for each element. It is commonly used when you want to perform a certain operation on each item in an array without explicitly creating a new array.
- `continue` and `break` statement not work `forEach` loop.

The syntax of the forEach function is as follows:
```javascript
array.forEach(callback(currentValue, index, array)[, thisArg]);
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

## DATA TRANSFORMATIONS: map(), filter(), and reduce()
- All three methods that are use to create new `array` based on transforming data from other arrays.
- But `reduce()` method not give any array.

### map():
- The `map()` method is used to create a new array by applying a provided function to each element of an existing array. It doesn't modify the original array; instead, it returns a new array with the modified values.
- `map()` method inside no console.log. It only `return`.
- The `map()` method are store as a variable. Because it return an array.
- It also allow (value, index, arr).

The syntax of the map() method is as follows:
```javascript
array.map(callback(currentValue, index, array)[, thisArg])
```

Here's an example that demonstrates the usage of the map() method:
```javascript
const numbers = [1, 2, 3, 4, 5];

const multipliedByTwo = numbers.map(function (number) { 
  return number * 2
});

console.log(multipliedByTwo); // Output: [2, 4, 6, 8, 10]
```
```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementDescriptions = movements.map(function (mov, i) {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You deposited ${mov}`;
  }
});

const movementDescriptions = movements.map(function (mov, i) {
  return `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'withdrew'} ${Math.abs(mov)}`;
});

console.log(movementDescriptions);
// ['Movement 1: You Deposited 200', 'Movement 2: You Deposited 450', 'Movement 3: You withdrew 400', 'Movement 4: You Deposited 3000', 'Movement 5: You withdrew 650', 'Movement 6: You withdrew 130', 'Movement 7: You Deposited 70', 'Movement 8: You Deposited 1300']
```

### filter():
- The `filter()` method is an array method that creates a new array containing all the elements that pass a specific condition. It takes a callback function as its argument, which is executed on each element of the array. The callback function determines whether an element should be included in the resulting array.
- The `filter()` method iterates over each element in the array and calls the callback function for each element. If the callback function returns `true` for an element, it is included in the new array. If the callback function returns `false`, the element is excluded.

The syntax for the filter() method is as follows:
```javascript
array.filter(callback(element, index, array)[, thisArg]);
```

Here's an example to illustrate how the `filter()` method works:
```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
```

### reduce():
- The `reduce()` method is another powerful array method that allows you to reduce an array into a single value by applying a function to each element of the array. It iterates over the array, accumulating a single value based on the logic defined in the callback function.

The syntax for the `reduce()` method is as follows:
```javascript
array.reduce(callback(accumulator, currentValue, index, array)[, initialValue]);
```
- **accumulator**: The accumulated value computed in the previous iteration or the `initialValue` if provided.
- **initialValue** (optional): A value that is used as the initial accumulator. If not provided, the first element of the array is used as the initial accumulator and the reduction starts from the second element.

Here's an example to illustrate how the reduce() method works:
```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (acc, curr, i) {
  console.log(`Iteration ${i}: ${acc}`)
  return acc + curr;
}, 0);

console.log(sum); 


// Output:
Iteration 0: 0
Iteration 1: 1
Iteration 2: 3
Iteration 3: 6
Iteration 4: 10
15
```
```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum); // Output: 15
```

- Reduce method also use to find `Maximum` and `Minimum` value in the array.
```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements.reduce(function (acc, mov) {
  if (acc < mov) {
    acc = mov;
  };
  return acc;
});

console.log(max); // 3000
```

# Search:

### find():
- The `find()` method is used to search for an element in an array. It takes a callback function as an argument and returns the first element in the array that satisfies the condition specified in the callback function. If no element is found, it returns `undefined`.
- It's not return an array.
- The `find()` method will iterate through the array and invoke the callback function for each element until the function returns `true`. At that point, it stops iterating and returns the current element. If the callback never returns `true` for any element, the method will return `undefined`.

Here's the syntax for the `find()` method:
```javascript
array.find(callback(element, index, array)[, thisArg])
```
- `thisArg` (optional): An object to which the `this` keyword can refer inside the callback function.
```javascript
const numbers = [1, 2, 3, 4, 5];

const foundElement = numbers.find((element, index, array) => {
  return element > 3;
});

console.log(foundElement); // Output: 4
```