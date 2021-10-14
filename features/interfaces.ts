const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `${this.year} ${this.name} is ${this.broken ? 'broken' : 'not broken'}`;
    }
};


// this is super long!!!
// const printVehicle = ({name, year, broken}: { name: string; year: number; broken: boolean }): void => {
//     console.log(name)
//     console.log(year)
//     console.log(broken)
// }

// improve using an interface!
interface Car {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const printVehicle = (vehicle: Car): void => {
    console.log(vehicle.summary())
}

printVehicle(oldCivic)