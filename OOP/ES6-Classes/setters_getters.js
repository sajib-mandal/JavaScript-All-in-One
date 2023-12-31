/*
// Objects: getter and setter
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
  },
};

// Here not using 'latest()'
console.log(account.latest); // 300

// not call 'latest(50)'
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]
*/



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
