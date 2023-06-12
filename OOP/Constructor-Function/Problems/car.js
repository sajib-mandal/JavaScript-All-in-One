const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  const newSpeed = this.speed + 10;
  console.log(newSpeed);
};

Car.prototype.brake = function () {
  const updatedSpeed = this.speed - 5;
  console.log(updatedSpeed);
};

// const car1 = new Car('BMW', 120);
// // car1.accelerate(); // 130
// // car1.brake(); // 115

// const car2 = new Car('Mercedes', 95);
// // car2.accelerate(); // 105
// // car2.brake(); // 90

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
// Connect
EV.prototype = Object.create(Car.prototype);

EV.prototype.cahargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%.`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.cahargeBattery(25);
console.log(tesla);
tesla.accelerate();