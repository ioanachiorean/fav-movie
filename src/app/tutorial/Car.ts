

export class Car {    
    color: string;
    brand: string;
    horsepower: number;

    constructor(color: string,  brand: string, horsepower: number) {
        this.color = color;
        this.brand = brand;
        this.horsepower = horsepower;
    }

    sayMyCar() {
        console.log('I drive a ' + this.brand)
    }

    static driveTheCar() {
        console.log('The car started driving')
    }
}
