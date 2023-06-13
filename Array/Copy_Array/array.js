// Slice method:
const array = [1, 2, 3, 4, 5, 6];
const newArray = array.slice();
console.log(newArray);

// Spread operator:
const num = [1, 2, 3, 4, 5, 6];
const newNum = [...num];
console.log(newNum);

// Concat method:
const arr1 = [1, 2, 3, 4, 5, 10];
const newArr1 = [].concat(arr1);
console.log(newArr1);
console.log(arr1)

// Array.from method:
const lol = [1, 2, 3, 4, 5, 100];
const newLol = Array.from(lol);
console.log(newLol);
console.log(lol);