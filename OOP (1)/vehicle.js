// naudojant ES6 klases

// 1. sukurti klasę 'Vehicle', kuri turi 2 parametrus: wheelCount, speed(km/h), 
// 2. sukurti metodą addSpeed kuris prideda prie esamo speed greičio 10km/h
// 3. sukurti metodą break kuris nuima nuo esamo greičio 5(km/h)
// 4. sukurti klases 'car' ir 'bicycle' kurios paveldi esamus 'vehile' metodus ir parametrus
// 5. 'car' pridėti metodą 'blink' kuris konsolėje atspausdina 'blink blink'
// 6. 'bicycle' pridėti metodą 'beep' kuris konsolėje atsapaudina 'beep beep'



class Vehicle {
    constructor(wheelCount, speed) {
        this.wheelCount = wheelCount;
        this.speed = speed;
    }

    addSpeed() {
        this.speed += 10;
    }

    break () {
        this.speed -= 5;
    }

}

class car extends Vehicle {
    constructor(wheelCount, speed) {
        super(wheelCount, speed);
    }

    blink() {
        console.log(`blink blink`);
    }
}

class bicycle extends Vehicle {
    constructor(wheelCount, speed) {
        super(wheelCount, speed);
    }

    beep() {
        console.log(`beep beep`);
    }
}
