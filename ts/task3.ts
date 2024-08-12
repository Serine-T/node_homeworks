interface Car {
    make: string;
    model: string;
    year: number;
}

class MyCar implements Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails = (): string =>  `Car Details: ${this.year} ${this.make} ${this.model}`;
}

const car1 = new MyCar("BMW", "X6", 2024);
console.log(car1.displayDetails());
