// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  // Public fields (instances)
  // A public field is very similar to just a property that we define
  // in a constructor. So it is avaliable on every created object.
  local = navigator.language;

  // Private fields (instance): this is truely private
  #movements = [];
  #pin;

  // Public methods:
  // no need to talk about: all method are public

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this is not actual privet property but it's a convention. Everything is public
    // this._movements = [];
    // this.local = navigator.language;

    // when we create an object it's automatically show
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // This is public interface of our object
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    // withdraw use '-' (negative) movement
    this.deposit(-val);
    return this;
  }


  getMovements() {
    return this.#movements;
  }
  

  requestLoan(val) {
    if (this.#approveLone(val)) {
      this.deposit(val);
      console.log('Lone approved');
      return this;
    }
  }

  // Private methods
  #approveLone(val) {
    return true;
  }
}

const acc1 = new Account('Sajib', 'TK', 1111);
acc1.deposit(150);
console.log(acc1.deposit(200))
acc1.withdraw(10); // [150, -10]
console.log(acc1);
// console.log(acc1.#movements); // SyntaxError: Private field
// console.log(acc1.#pin); // SyntaxError: Private field
// console.log(acc1.#approveLone); // SyntaxError: Private field

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
