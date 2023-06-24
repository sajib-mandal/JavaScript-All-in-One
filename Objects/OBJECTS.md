# Objects

```javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
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
};
```

### Destructuring Objects:
- Object order of the elements does not matter.
```javascript
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
/*
Classico Italiano 
{thu: {…}, fri: {…}, sat: {…}} 
(4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
*/
```

Variable name to be different from property names:
```javascript
const { name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);
/*
Classico Italiano 
{thu: {…}, fri: {…}, sat: {…}} 
(4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
*/
```

**`Default Values`**