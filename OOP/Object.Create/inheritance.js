const Person = {
  caclAge() {
    console.log(2050 - this.birthYear);
  },

  // This look like a constructor but it's not
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// const rajib = Object.create(Person);

const Student = Object.create(Person);

Student.init = function(firstName, birthYear, course) {
  Person.init.call(this, firstName, birthYear);
  this.course = course;
}

Student.introduce = function() {
  console.log(`My name is ${this.firstName} and I am study ${this.course}`);
}

const sajib = Object.create(Student);
sajib.init('Sajib', 1999, 'Computer Science');
sajib.introduce();
sajib.caclAge();
