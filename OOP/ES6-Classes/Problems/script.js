class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        const newSpeed = this.speed + 10;
        console.log(newSpeed);
    }
    brake() {
        const updatedSpeed = this.speed - 5;
        console.log(updatedSpeed);
    }

    get speedUS() {
        return `${this.speed / 1.6} mi/h`
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}



const car1 = new Car('Ford', 120);
// car1.accelerate(); // 130
// car1.brake(); // 115
console.log(car1.speedUS); // 75 mi/h
car1.speedUS = 50;
console.log(car1)
