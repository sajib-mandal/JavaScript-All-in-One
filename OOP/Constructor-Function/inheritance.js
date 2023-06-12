const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2050 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Connect Student and Person Prototype: by using Object.create()
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I am study ${this.course}.`)
}

const sajib = new Student('Sajib', 1999, 'Computer Science');
sajib.introduce();
// sajib.calcAge()
console.log(sajib);

Student.prototype.constructor = Student;
console.log(sajib);

