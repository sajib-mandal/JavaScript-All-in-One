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
