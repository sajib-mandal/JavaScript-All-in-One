const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    const newSpeed = this.speed + 10;
    console.log(newSpeed);
}

Car.prototype.brake = function () {
    const updatedSpeed = this.speed - 5;
    console.log(updatedSpeed);
}

const car1 = new Car('BMW', 120);
// car1.accelerate(); // 130
// car1.brake(); // 115

const car2 = new Car('Mercedes', 95);
// car2.accelerate(); // 105
// car2.brake(); // 90