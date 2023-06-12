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
  /**
   * @param {string | string[]} name
   */
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  static hey() {
    console.log('Hi Sajib');
  }
}

// when one class inherited another class we use to property, called:
// 1. extends: extends is connection between parent to child class
// 2. super(): super is constructor function of the parent class

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I am study ${this.course}`);
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const sajib = new Student('Sajib Mandal', 1999, 'Computer Science');
sajib.introduce();
sajib.calcAge();
