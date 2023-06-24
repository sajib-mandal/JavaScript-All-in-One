'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
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

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  
};


// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...lol] = arr;
// console.log(a, b, lol);

// const arr1 = [1, 2, ...[4, 5]];
// console.log(arr1)


// const newRestaurantCopy = { ...restaurant };
// newRestaurantCopy.name = 'Sajib Mandal';
// console.log(newRestaurantCopy)
// console.log(restaurant);

// const holeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(holeMenu);

// const n = 'sajib';
// console.log(...n)

// restaurant.orderDelivery({
//   time: '20:30',
//   address: 'Sadarpur',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // const { open, close } = restaurant.openingHours.fri;
// // console.log(open, close); // 11, 23

// const { fri: { open, close }} = restaurant.openingHours;
// console.log(open, close); // 11 23

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// /*
// Classico Italiano
// {thu: {…}, fri: {…}, sat: {…}}
// (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// */

// Variable name to be different from property names
// const { name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// /*
// []
// ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// */

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// // const { a, b } = obj; // SyntaxError
// // let { a, b } = obj; // SyntaxError
// // { a, b } = obj; // SyntaxError: Unexpected token '='

// ({ a, b } = obj);
// console.log(a, b); // 23, 7

// const bigObject = {
//   name: "John",
//   age: 25,
//   address: {
//     street: "123 Main St",
//     city: "Exampleville",
//     country: "Exampleland"
//   },
//   education: {
//     highSchool: {
//       name: "Example High School",
//       graduationYear: 2015
//     },
//     university: {
//       name: "Example University",
//       graduationYear: 2019,
//       degree: "Bachelor of Science"
//     }
//   },
//   hobbies: ["reading", "coding", "hiking"],
//   friends: [
//     { name: "Alice", age: 27 },
//     { name: "Bob", age: 26 },
//     { name: "Charlie", age: 28 }
//   ],
//   greet: function() {
//     console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
//   }
// };

// bigObject.greet();

// const arr = [1, 2, 3]
// const newArray = [0, ...arr, 7, 89];
// console.log(...newArray)