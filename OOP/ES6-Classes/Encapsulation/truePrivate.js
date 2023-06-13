// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  // Public fields (instances)
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
  }

  withdraw(val) {
    // withdraw use '-' (negative) movement
    this.deposit(-val);
  }

  

  requestLoan(val) {
    if (this.#approveLone(val)) {
      this.deposit(val);
      console.log('Lone approved');
    }
  }

  // Private methods
  #approveLone(val) {
    return true;
  }
}

const acc1 = new Account('Sajib', 'TK', 1111);
acc1.deposit(150);
acc1.withdraw(10); // [150, -10]
console.log(acc1);
// console.log(acc1.#movements); // SyntaxError: Private field
// console.log(acc1.#pin); // SyntaxError: Private field
// console.log(acc1.#approveLone); // SyntaxError: Private field
