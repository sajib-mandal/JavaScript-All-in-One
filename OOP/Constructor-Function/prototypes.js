// Create Objects using Constructor Function:

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    
}

const sajib = new Person('Sajib', 1999);
console.log(Person.prototype);

// Prototypes
Person.prototype.calcAge = function () {
    console.log(2050 - this.birthYear);
}

sajib.calcAge(); // 51

console.log(sajib.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(sajib.__proto__ === Person.prototype); // true

// we can set properties bu using prototype
Person.prototype.species = 'Homo Sapiens';
console.log(sajib);
console.log(sajib.hasOwnProperty('firstName')); // true
console.log(sajib.hasOwnProperty('species')); // false