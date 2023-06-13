# Different Way Copy JavaScript Array

## Not Change Orginal Array: 

### Note:
- It's important to note that these methods create a shallow copy of the array. If the array contains nested objects or arrays, the references to those objects will still point to the same memory locations in the copied array. If you need to create a deep copy, where nested objects are also cloned, you'll need to use more advanced techniques, such as recursion or external libraries like `lodash.cloneDeep()`.

### Slice method: 
- You can use the `slice()` method to create a shallow copy of an array. It takes two optional parameters representing the start and end indices of the portion of the array to be copied. If no parameters are provided, it copies the entire array.
```javascript
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();
```

### Spread operator: 
- The spread operator (`...`) can be used to create a new array by expanding the elements of an existing array.
```javascript
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];
```

### Concat method: 
- The `concat()` method can be used to concatenate two or more arrays. By passing an empty array as an argument to `concat()`, you can create a copy of the original array.
```javascript
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [].concat(originalArray);
```

### Array.from method: 
- The `Array.from()` method can create a new array from an array-like or iterable object. By passing the original array as an argument, you can create a copy.
```javascript
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = Array.from(originalArray);
```

## Change Original Array: (Mutates) The Array

### Splice method:
- `splice()` method also create an array. But it's change the original arry.
- `splice()` method have three parameters (start, numberOfElementsDelete, numberOfElementsInsert).
```javascript
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```
- It's mainly use for DELETE element of the array.
```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']
```

### Reverse method:
```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.reverse()); // ['e', 'd', 'c', 'b', 'a']
console.log(arr); // ['e', 'd', 'c', 'b', 'a']
```
