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



class EV extends Car {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
}

const rivian = new EV('Rivian', 120, 23);
rivian.accelerate()
