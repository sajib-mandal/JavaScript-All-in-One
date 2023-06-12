// Create Objects using Constructor Function:

// Arrow function not use Constructor Function because it has no 'this' keyword
// This is only for work Function-Expression and Function-Declaration

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // we added properties, we can of course also add methods.
    // this would work just fine here but this is actually a really bad practice.
    // so, you should naver do this. You should never creste a method inside of a 
    // constructor function. That's because imagine we were gonna create a hundred
    // or thousands or even tens of thousands of a Person objects using this constructor 
    // function. Than what would happen is that each of these objects would carry around
    // this function here. So, if we had a thousand objects, we would essentially create 
    // a thousand copies of this function. And so that would be terrible for the performance 
    // of our code.
    // But instead to solve this problem, we are gonna use 'Prototypes and Prototype Inheritance'.
    // Note:
    //    Function Constructors are not really a feature of JavaScript language.
    this.calcAge = function () {
        console.log(2050 - this.birthYear);
    }
}

const sajib = new Person('Sajib', 1999);
// 1. 'new' careted {} (empty object)
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(sajib); // Person { firstName: 'Sajib', birthYear: 1999 }
console.log(sajib instanceof Person); // true

const rajib = 'Rajib';
console.log(rajib instanceof Person); // false