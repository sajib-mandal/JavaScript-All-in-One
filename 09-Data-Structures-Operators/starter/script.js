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


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

const order = restaurant.order?.(0, 1) ?? 'Method does not exist';
console.log(order); // ['Focaccia', 'Pasta']
const order1 = restaurant.orderMango?.(0, 1) ?? 'Method does not exist';
console.log(order1); // Method does not exist


const users = [{ name: 'Sajib', email: 'sajibmandal@gmail.com' }];
console.log(users[0]?.rollnum ?? 'Users not exit'); // sajib
// restaurant.numGuests = undefined;
// const guests2 = restaurant.numGuests ?? 10;
// console.log(guests2); // 0

// console.log(10 && null)

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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;

/* 2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players. */
const [gk, ...fieldPlayers] = players1;

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];

/* 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'. */
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

/* 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') */
const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2)

/* 6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in) */
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

/* The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator. */
// team1 <team2 && console.log('Team 1 is more likely to win');
