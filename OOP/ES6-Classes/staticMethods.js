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
  
  const sajib = new Person('Sajib', 1999);
  console.log(sajib);
  sajib.calcAge();

  Person.hey(); //
  