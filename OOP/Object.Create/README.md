# Object.create():
- It is still the idea of prototypal inheritance. However, there are no prototype properties involved. 
- And also no constructor functions.
- No `new` operator.
- So instead, we can use Object.create to essentially manually set the prototype of an object to any other object that we want.

```javascript
const Person = {
  caclAge() {
    console.log(2050 - this.birthYear);
  },
};

const sajib = Object.create(Person);
console.log(sajib); // {}
sajib.firstName = 'Sajib';
sajib.birthYear = 1999;
sajib.caclAge(); // 51
```

### Better Way:

Do the same thing in programmatically
```javascript
const Person1 = {
  caclAge() {
    console.log(2050 - this.birthYear);
  },

  // This look like a constructor but it's not
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const rajib = Object.create(Person1);
rajib.init('Rajib', 1994);
rajib.caclAge(); // 56
```