'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Sajib Mandal',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// implementation
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);



















/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Callback
// a callback function, the name of the function could be any name
// const callback = n => {
//   return n ** 2;
// };

// function cube(callback, n) {
//   return callback(n) * n;
// }

// console.log(cube(callback, 3));

// Returing function
// const higherOrder = n => {
//   const doSomething = m => {
//     const doWhatEver = t => {
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatEver;
//   };
//   return doSomething;
// };

// console.log(higherOrder(2)(3)(11));

// call-back function
// const numbers = [1, 2, 3, 4, 5];
// const sumArray = arr => {
//   let sum = 0;
//   const callback = function(element) {
//     sum += element;
//   }

//   arr.forEach(callback);
//   return sum;
// };

// console.log(sumArray(numbers));

// const sumArray = arr => {
//   let sum = 0;
//   arr.forEach(function (element) {
//     sum += element;
//   });
//   return sum;
// };
// console.log(sumArray(numbers))

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 'for of' loop
// for (const [index, mov] of movements.entries()) {
//   if (mov > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// }

// forEach
// movements.forEach(function (mov, index) {
//   if (mov > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'TK', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach(function(cur, i) {
//   console.log(`${i}: ${cur}`)
// })



// Coding Challenge #1
/*
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/


const checkDogs = function (dogsJulia, dogsKate) {
  const newDogsJulia = dogsJulia.slice(1, -2);
  const allDogs = newDogsJulia.concat(dogsKate);
  
  allDogs.forEach(function (val, i) {
    if (val >= 3) {
      console.log(`Dog number ${i+1} is an adult, and is ${val} years old`);
    } else {
      console.log(`Dog number ${i+1} is an puppy, and is ${val} years old`);
    }
  });
};


checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

// const arr = [3, 5, 2, 12, 7];
// const newArray = arr.slice(1, -1);
// console.log(newArray);
// console.log(arr)
