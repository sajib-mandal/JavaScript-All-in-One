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

// Display Movements
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${Math.abs(mov)} €</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Sort movements
let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})


// Create UserName
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);

const updateUI = acc => {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.userName !== currentAccount.userName
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }

  updateUI(currentAccount);
});

// Request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  const grantLoan = currentAccount.movements.some(mov => mov >= amount * 0.1);

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
  if (amount > 0 && grantLoan) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

// close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const closeUser = inputCloseUsername.value;
  const closeUserPin = Number(inputClosePin.value);

  if (
    closeUser === currentAccount.userName &&
    closeUserPin === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

// Total Balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};



// Summary: in, out, interest
const calcDisplaySummary = function (acc) {
  const sumInBalance = acc.movements
    .filter(val => val > 0)
    .reduce((acc, val) => acc + val, 0);

  labelSumIn.textContent = `${sumInBalance} €`;

  const sumOutBalance = acc.movements
    .filter(val => val < 0)
    .reduce((acc, val) => acc + val, 0);

  labelSumOut.textContent = `${Math.abs(Math.floor(sumOutBalance))} €`;

  const interest = acc.movements
    .filter(val => val > 0)
    .map(val => (val * acc.interestRate) / 100)
    .filter(val => val >= 1)
    .reduce((acc, val) => acc + val, 0);

  labelSumInterest.textContent = `${Math.floor(interest)} €`;
};

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
// const total = movements.reduce(function (acc, val) {
//   return acc + val;
// });

// console.log(total)

// flat method
// const nestedArray = [1, 2, [3, 4, [5, [6]]]];
// const flattenedArray = nestedArray.flat(Infinity);
// console.log(flattenedArray);

// flatMap
// const numbers = [1, 2, , 3, 4];
// const result = numbers.flatMap(num => [num*2, num*num]);
// console.log(result)

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function (acc, curr, i) {
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + curr;
// }, 0);

// console.log(sum);

// findIndex

// const numbers = [1, 2, 3, 4, 5];
// const evenIndex = numbers.findIndex(val => val % 2 === 0);
// console.log(evenIndex)

// /*
// // Output:
// Iteration 0: 0
// Iteration 1: 1
// Iteration 2: 3
// Iteration 3: 6
// Iteration 4: 10
// 15
// */

// const deposit = movements.filter(function(mov) {
//   return mov > 0;
// });

// const accountMovements = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, val) => acc + val, 0);
// console.log(accountMovements);

// const accountMovements1 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, val) => acc + val, 0);
// console.log(accountMovements1);

// console.log(deposit)


// // sort movements
// const sortArray = account1.movements.sort((a, b) => a - b);
// console.log(sortArray);

// some
// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some(num => num % 2 === 0);
// console.log(hasEvenNumber);

// // every
// const numbers = [2, 4, 6, 9, 10];
// const allEvenNumbers = numbers.every(num => num % 2 === 0);
// console.log(allEvenNumbers)

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const largest = movements.find((val) => val >= 1000);
// console.log(largest);

// console.log(accounts);

// const jd = accounts.for(acc => acc.userName === 'jd');
// console.log(jd)

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc)
//   }
// }

// accounts.forEach(acc => {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// });

// const max = movements.reduce(function (acc, mov) {
//   if (acc < mov) {
//     acc = mov;
//   };
//   return acc;
// });

// console.log(max);

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

// const checkDogs = function (dogsJulia, dogsKate) {
//   const newDogsJulia = dogsJulia.slice(1, -2);
//   const allDogs = newDogsJulia.concat(dogsKate);

//   allDogs.forEach(function (val, i) {
//     if (val >= 3) {
//       console.log(`Dog number ${i+1} is an adult, and is ${val} years old`);
//     } else {
//       console.log(`Dog number ${i+1} is an puppy, and is ${val} years old`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

// const arr = [3, 5, 2, 12, 7];
// const newArray = arr.slice(1, -1);
// console.log(newArray);
// console.log(arr)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementDescriptions = movements.map(function (mov, i) {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   }
// });

// const movementDescriptions = movements.map(function (mov, i) {
//   return `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'withdrew'} ${Math.abs(mov)}`;
// });

// console.log(movementDescriptions);
// // ['Movement 1: You Deposited 200', 'Movement 2: You Deposited 450', 'Movement 3: You withdrew 400', 'Movement 4: You Deposited 3000', 'Movement 5: You withdrew 650', 'Movement 6: You withdrew 130', 'Movement 7: You Deposited 70', 'Movement 8: You Deposited 1300']

// Challenge #2:

// const calcAverageHumanAge = arr => {
//   const humanAge = arr
//     .map(val => (val <= 2 ? 2 * val : 16 + val * 4))
//     .filter(val => val >= 18)
//     .reduce((acc, val, _, arr) => acc + val / arr.length, 0);
//   return humanAge;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/*
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/
