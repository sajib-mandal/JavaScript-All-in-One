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
- The forEach() method is a higher-order function that allows you to iterate over the elements of an array and execute a provided function for each element. It is commonly used when you want to perform a certain operation on each item in an array without explicitly creating a new array.
- `continue` and `break` statement not work forEach() method.

The syntax of the forEach function is as follows:
```javascript
array.forEach(callback(currentValue, index, array), thisArg);
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
- The map() method is used to create a new array by applying a provided function to each element of an existing array. It doesn't modify the original array; instead, it returns a new array with the modified values.
- The map() method inside no console.log. It only `return`.
- The map() method are store as a variable. Because it return an array.
- It also allow (value, index, arr).

The syntax of the map() method is as follows:
```javascript
array.map(callback(currentValue, index, array), thisArg)
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
- The filter() method is an array method that creates a new array containing all the elements that pass a specific condition. It takes a callback function as its argument, which is executed on each element of the array. The callback function determines whether an element should be included in the resulting array.
- The filter() method iterates over each element in the array and calls the callback function for each element. If the callback function returns `true` for an element, it is included in the new array. If the callback function returns `false`, the element is excluded.

The syntax for the filter() method is as follows:
```javascript
array.filter(callback(element, index, array), thisArg);
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
- The reduce() method is another powerful array method that allows you to reduce an array into a single value by applying a function to each element of the array. It iterates over the array, accumulating a single value based on the logic defined in the callback function.

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

- Reduce method also use to count element in the array.
```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const count = movements.reduce((count, val) => {
//   if (val > 1000) {
//     count += 1;
//   }
//   return count;
// }, 0);
const count = movements.reduce(
  (count, val) => (val >= 1000 ? count + 1 : count),
  0
);

console.log(count); // 2
```

- Reduce method also use to create an Object.
```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const sums = movements.reduce(
  (sums, cur) => {
    cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
    return sums;
  },
  { deposits: 0, withdrawals: 0 }
);

console.log(sums); // {deposits: 5020, withdrawals: -1180}

const { deposits, withdrawals } = movements.reduce(
  (sums, cur) => {
    // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
  },
  { deposits: 0, withdrawals: 0 }
);

console.log(deposits, withdrawals); // 5020 -1180
```

# Search:

### find():
- The find() method is used to search for an element in an array. It takes a callback function as an argument and returns the first element in the array that satisfies the condition specified in the callback function. If no element is found, it returns `undefined`.
- It's not return an array.
- The find() method will iterate through the array and invoke the callback function for each element until the function returns `true`. At that point, it stops iterating and returns the current element. If the callback never returns `true` for any element, the method will return `undefined`.

Here's the syntax for the `find()` method:
```javascript
array.find(callback(element, index, array), thisArg);
```
- `thisArg` (optional): An object to which the `this` keyword can refer inside the callback function.
```javascript
const numbers = [1, 2, 3, 4, 5];

const foundElement = numbers.find((element, index, array) => {
  return element > 3;
});

console.log(foundElement); // Output: 4
```

### findIndex():
- The findIndex() method is an array method that is used to find the index of the first element in an array that satisfies a given condition. It takes a callback function as an argument and executes this function on each element of the array until the condition is met.
- The findIndex() method returns the index of the first element that satisfies the condition specified in the callback function. If no element satisfies the condition, it returns -1.

Here's the syntax for the findIndex method:
```javascript
array.findIndex(callback(element, index, array), thisArg);
```

Here's an example that demonstrates the usage of findIndex:
```javascript
const numbers = [1, 2, 3, 4, 5];

// Find the index of the first even number
const evenIndex = numbers.findIndex((number) => number % 2 === 0);
console.log(evenIndex); // Output: 1 (index of number 2)

// Find the index of the first number greater than 3
const greaterThanThreeIndex = numbers.findIndex((number) => number > 3);
console.log(greaterThanThreeIndex); // Output: 3 (index of number 4)

// Find the index of the first number that is not present
const notPresentIndex = numbers.findIndex((number) => number === 10);
console.log(notPresentIndex); // Output: -1 (no number is equal to 10)
```

### some();
- The `some()` method is used to check if at least one element in an array satisfies a specified condition. It executes a callback function for each element of the array until the callback returns a truthy value. If a truthy value is returned by the callback for any element, the some() method immediately returns `true`. If the callback returns a falsy value for all elements, the method returns `false`.

The syntax for the some() method is as follows:
```javascript
array.some(callback(element, index, array), thisArg);
```

Here's an example that demonstrates the usage of the some() method:
```javascript
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(function (element) {
  return element % 2 === 0;
});

console.log(hasEvenNumber); // Output: true
```
In the example, the `some()` method is used to check if the array numbers contains at least one even number. The callback function checks if the current element (element) is divisible by 2. Since there is an even number in the array (2), the some() method returns true.

### every():
- The `every()` method is used to check if all elements in an array satisfy a specified condition. It executes a callback function for each element of the array until the callback returns a falsy value. If a falsy value is returned by the callback for any element, the every() method immediately returns `false`. If the callback returns a truthy value for all elements, the method returns `true`.

The syntax for the every() method is as follows:
```javascript
array.every(callback(element, index, array), thisArg);
```

Here's an example that demonstrates the usage of the every() method:
```javascript
const numbers = [2, 4, 6, 8, 10];

const allEvenNumbers = numbers.every(function (element) {
  return element % 2 === 0;
});

console.log(allEvenNumbers); // Output: true
```

In the example, the `every()` method is used to check if all numbers in the array numbers are even. The callback function checks if the current element (element) is divisible by 2. Since all elements in the array satisfy this condition, the every() method returns `true`.


### flat():
- The flat() method in JavaScript is used to flatten nested arrays. It creates a new array that is a one-dimensional version of the original array by concatenating all sub-arrays recursively up to the specified depth.
- The flat() method returns a new array with the flattened elements. It does not modify the original array.

Here's the basic syntax of the flat() method:
```javascript
array.flat([depth]);
```

-`array`: The array to be flattened.
- `depth` (optional): Specifies the depth level until which the array should be flattened. By default, the depth is 1.

Here's an example usage of the flat() method:
```javascript
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattenedArray = nestedArray.flat();

console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5, 6]
```

If you want to flatten the array completely, regardless of the nesting depth, you can pass `Infinity` as the depth parameter:
```javascript
const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const completelyFlattenedArray = deeplyNestedArray.flat(Infinity);

console.log(completelyFlattenedArray);
// Output: [1, 2, 3, 4, 5]
```

### flatMap():
- The flatMap() method is a combination of the `map()` and `flat()` methods. It applies a mapping function to each element of an array and then flattens the result into a new array.
- The flatMap() method returns a new array with the flattened and mapped elements. It does not modify the original array.
- The flatMap() method is useful when you want to map an array and then flatten the results in one step, avoiding the need for an additional `flat()` call.
- The flatMap() method goes 1 level deep. But your array more than 1 level deep this time you need to use `flat()` method not `flatMap()`.

Here's the basic syntax of the flatMap() method:
```javascript
array.flatMap(callback(currentValue, index, array), thisArg);
```

Here's an example usage of the flatMap() method:
```javascript
const numbers = [1, 2, 3, 4];

const doubledAndSquared = numbers.flatMap((num) => [num * 2, num * num]);

console.log(doubledAndSquared);
// Output: [2, 1, 4, 4, 6, 9, 8, 16]
```

In the above example, the flatMap() method is called on the numbers array. The callback function takes each number, doubles it, and also calculates its square. The returned array is then flattened into a single level.

**Note**:
- It's important to note that the flatMap() method automatically removes any empty slots or undefined values from the returned array. If you want to preserve them, you can use the map() method instead.
```javascript
const arrayWithEmptySlots = [1, 2, , 4];

const mappedAndFlattened = arrayWithEmptySlots.flatMap((num) => [num, num]);

console.log(mappedAndFlattened);
// Output: [1, 1, 2, 2, 4, 4]
```

## Sorting An Array

### Sort An Array of String:
- To sort an array of strings, you can use the `sort()` method. The sort() method sorts the elements of an array in place and returns the sorted array. By default, it sorts the elements in lexicographic (dictionary) order based on the string's Unicode code points.
- The sort() method mutate the original array.
```javascript
const arr = ["banana", "apple", "cherry", "date"];
arr.sort();
console.log(arr); // ["apple", "banana", "cherry", "date"]
```

If you want to sort the array in a different order or based on a specific criterion, you can provide a custom sorting function as an argument to the sort() method. This function should take two arguments (two elements of the array) and return a negative value if the first element should be sorted before the second element, a positive value if the first element should be sorted after the second element, or 0 if the elements are equal.
```javascript
const arr = ["banana", "apple", "cherry", "date"];
arr.sort((a, b) => a.length - b.length);
console.log(arr); // ["date", "apple", "cherry", "banana"]
```

### Sort An Array of Numbers:
- To sort an array of numbers, you can use the sort() method. By default, the sort() method converts the elements to strings and sorts them based on their Unicode code points. However, this can lead to incorrect sorting when dealing with numbers because the comparison is based on string values. To properly sort an array of numbers, you need to provide a custom sorting function as an argument to the sort() method. 

**Sort An Array of Numbers in Ascending Order**:
```javascript
const arr = [10, 5, 8, 2, 3];
arr.sort((a, b) => a - b);
console.log(arr); // [2, 3, 5, 8, 10]
```

**Explanation**:

- The sort() method is called on the arr array.
- The custom sorting function (a, b) => a - b subtracts b from a.
- If the result is a negative value, it indicates that a should be sorted before b.
- If the result is a positive value, it indicates that a should be sorted after b.
- Based on the return values of the custom sorting function, the sort() method rearranges the elements of the array in ascending order.
- The sorted array arr is then printed to the console using console.log().


**Sort An Array of Numbers in Descending Order**:
```javascript
const arr = [10, 5, 8, 2, 3];
arr.sort((a, b) => b - a);
console.log(arr); // [10, 8, 5, 3, 2]
```

### Which Array Method Mutate The Original Array?
- **push()**: Adds one or more elements to the end of an array and returns the new length of the array.
- **pop()**: Removes the last element from an array and returns that element.
- **shift()**: Removes the first element from an array and returns that element.
- **unshift()**: Adds one or more elements to the beginning of an array and returns the new length of the array.
- **splice()**: Changes the contents of an array by removing, replacing, or adding elements in place. It returns an array containing the removed elements.
- **reverse()**: Reverses the order of the elements in an array in place.
- **sort()**: Sorts the elements of an array in place and returns the sorted array.
- **fill()**: Changes all elements in an array to a static value in place.
- **copyWithin()**: Copies a sequence of elements within the array to the position starting at the specified target index in place.
- **set()**: Sets the values of a typed array or a subarray within a typed array.

### Which Array Method Not Mutate The Original Array?
- **concat()**: Combines two or more arrays and returns a new array without modifying the existing arrays.
- **slice()**: Extracts a shallow copy of a portion of an array into a new array based on specified start and end indices.
- **filter()**: Creates a new array with all elements that pass the test implemented by the provided function.
- **map()**: Creates a new array by applying a provided function to each element of the array.
- **reduce()**: Applies a function against an accumulator and each element in the array, resulting in a single value.
- **join()**: Joins all elements of an array into a string and returns the string.
- concat(), slice(), filter(), map(), reduce(), and join() return a new array or a string without modifying the original array.