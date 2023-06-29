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

// // Property Names or Keys:
// const entries = Object.entries(restaurant.openingHours)
// for (const [key, day] of entries) {
//   console.log(key, day);
// }

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// const order = restaurant.order?.(0, 1) ?? 'Method does not exist';
// console.log(order); // ['Focaccia', 'Pasta']
// const order1 = restaurant.orderMango?.(0, 1) ?? 'Method does not exist';
// console.log(order1); // Method does not exist

// const users = [{ name: 'Sajib', email: 'sajibmandal@gmail.com' }];
// console.log(users[0]?.rollnum ?? 'Users not exit'); // sajib
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

// Challenge: 2

/* 1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski") */
for (const [i, name] of game.scored.entries()) {
  // console.log(`Goal ${i+1}: ${name}`);
}

/* 2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember) */
let sum = 0;
for (const value of Object.values(game.odds)) {
  sum += value;
}
sum /= Object.values(game.odds).length;
// console.log(sum)

/* 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 😉 */

// for (const [team, value] of Object.entries(game.odds)) {
//   console.log(`Odd of ${team === 'x' ? 'draw': game[team]} : ${value} `)
// }

// const staff = ['Sajib', 'Rajib', 'Rajib', 'Rahul'];

// const staffUnique = new Set(staff).size;
// console.log(staffUnique)

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

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*
Coding Challenge #3 
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time). 
Your tasks: 
*/
// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
// console.log(events);

/* 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log. */
gameEvents.delete(64);
// console.log(gameEvents);

/* 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes) */
const time = [...gameEvents.keys()].pop();
// console.log(time)
// console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`)

/* 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17: ⚽ GOAL */

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  // console.log(`[${half} HALF] ${min}: ${event}`);
}
const str = 'aello';
console.log(str.charCodeAt(0)); // Output: 101
