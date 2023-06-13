class Account {
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this._pin = pin;
      // Protected property
      // this is not actual privet property but it's a convention. Everything is public
      this._movements = [];
      this.local = navigator.language;
  
      // when we create an object it's automatically show
      console.log(`Thanks for opening an account, ${owner}`);
    }
  
    // This is public interface of our object
    deposit(val) {
      this._movements.push(val);
    }
  
    withdraw(val) {
      // withdraw use '-' (negative) movement
      this.deposit(-val);
    }
  
    _approveLone(val) {
      return true;
    }
  
    requestLoan(val) {
      if (this._approveLone(val)) {
        this.deposit(val);
        console.log('Lone approved');
      }
    }
  }
  
  const acc1 = new Account('Sajib', 'TK', 1111);
  acc1.deposit(150);
  acc1.withdraw(10); // [150, -10]
  console.log(acc1);