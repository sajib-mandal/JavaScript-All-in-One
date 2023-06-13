class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.local = navigator.language;

    // when we create an object it's automatically show
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // This is public interface of our object
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    // withdraw use '-' (negative) movement
    this.deposit(-val);
  }

  approveLone(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLone(val)) {
      this.deposit(val);
      console.log('Lone approved');
    }
  }
}

const acc1 = new Account('Sajib', 'TK', 1111);
acc1.deposit(150);
acc1.withdraw(10); // [150, -10]
console.log(acc1);
