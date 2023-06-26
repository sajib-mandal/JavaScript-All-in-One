# JavaScript Importance

```javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};
```

# Short Circuiting ( && and || )
- JavScript falsey value: `false`, `0`, `NaN`, `""`, `null` and `undefined`.

### ||

Using Ternary Operator:
```javascript
restaurant.numGuests = 30; 
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests); // 30 else 10
```

Using Short Circuit: ||
```javascript
const guests = restaurant.numGuests || 10;
console.log(guests); // 30
```

# The Nullish Coalescing Operator ( ?? )

- Nullish value is: 'null' and 'undefined'. Here both are false value.
- Not includes '0' or ''. Here both are true value.
- It acceptes 0 value

```javascript
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests ?? 10;
console.log(guests2); // 0
```

## Optional Chaining ( ? )

```javascript
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // 'restaurant.openingHours.day?.open' is not working
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
```

Also work Methods:
```javascript
const order = restaurant.order?.(0, 1) ?? 'Method does not exist';
console.log(order); // ['Focaccia', 'Pasta']
const order1 = restaurant.orderMango?.(0, 1) ?? 'Method does not exist';
console.log(order1); // Method does not exist
```

Also work Arrays:
```javascript
const users = [{ name: 'Sajib', email: 'sajibmandal@gmail.com' }];
console.log(users[0]?.name ?? 'Users not exit'); // sajib
```