# Difference Between OOP and Functional Programming in JavaScript

### OOP:
```javascript
// Creating a class and objects using OOP

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.calculateArea()); // Output: 50
```
### FP:
```javascript
// Using functional programming to calculate the area of a rectangle

function calculateArea(width, height) {
  return width * height;
}

const width = 5;
const height = 10;
const area = calculateArea(width, height);
console.log(area); // Output: 50
```

# 4 Fundamental Principles of Object-Oriented Programming:
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

### Abstraction:
- Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing's we're implementing, instead of messing with details that don't really matter to out implementation.

### Encapsulation:
- Keeping properties and methods `private` inside the class, so they are not accessible from outside the class. And other methods can be exposed as a public interface (API).

### Inheritance:
- Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

### Polymorphism:
- The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods.


## Three Way to Create Object:
- Constructor Function
- ES6 Classes
- Objecty.create()