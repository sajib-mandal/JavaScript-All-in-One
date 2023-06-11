// class expression
// const Person = class {}

// class declaration
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


// this is also work but not doing this
// Person.prototype.greet = function () {
//   console.log(this.firstName);
// }
// sajib.greet();
// console.log(sajib.__proto__); // {greet: ƒ, constructor: ƒ, calcAge: ƒ}