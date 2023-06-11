# ES6 Classes

```javascript
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2050 - this.birthYear);
  }
}

const sajib = new Person('Sajib', 1999);
console.log(sajib);
sajib.calcAge();
```

## Setters and Getters: (isn't very important)
- Setter and Getter is very useful data validation.

### How getters and setters work in object:

```javascript
const account = {
    owner: 'Sajib',
    movements: [200, 530, 120, 300],

    get latest() {
        // give last element of the array
        // return this.movements[this.movements.length - 1];
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

// Here not using 'latest()'
console.log(account.latest); // 300

// not call 'latest(50)'
account.latest = 50; 
console.log(account.movements); // [200, 530, 120, 300, 50]
```

However, Classes also have getters and setters methods and they work as same way as Object.

```javascript
// Classes: getter and setter
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2050 - this.birthYear);
  }

  get age() {
    console.log(2050 - this.birthYear);
  }

  // Here we check full name
  // set _ when property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
}

const sajib = new Person('Sajib Mandal', 1999);
console.log(sajib);
sajib.calcAge();

// getter
sajib.age; // 51

// const rajib = new Person('Rajib', 1994); // Person {birthYear: 1994}
const rajib = new Person('Rajib Mandal', 1994); // Person {_fullName: 'Rajib Mandal', birthYear: 1994}
```


## Static Methods:

- In JavaScript, static methods are functions that are associated with a class rather than an instance of that class. 
- They are defined using the `static` keyword within the class declaration.
- Static methods are not available on the instances, and sometimes they are still usefull to implement some kind of helper function about a class or about a constructor function.

```javascript
class Person {
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
      console.log(2050 - this.birthYear);
    }
  
    static hey() {
        console.log(`Hi Sajib`)
    }
  }

  Person.hey(); // Hi Sajib
  ```