const carMakers = ['ford', 'chevy', 'toyota'];
const dates = [new Date(), new Date(), new Date()];

// 2d arrays
const carsByMake = [
    ['chevy', 'camaro'],
    ['toyota', 'corolla'],
    ['ford', 'f-150']
]

// help with inference when extracting values

// since 'carMakers' type is string[], ts automatically knows 'car' and 'myCarMaker' are strings. it was pulled from carMakers.
const car = carMakers[0];
const myCarMaker = carMakers.pop();

// prevent incompatible values
// this throws an error. 72000.99 is not a string!
// carMakers.push(72000.99)

// help with map, reduce, forEach etc
const newCarMakers = carMakers.map((carMaker: string): string => {
    // we get autocomplete here with .toUpperCase() since carMaker is a known string!!
    return carMaker.toUpperCase() + '!!';
});

console.log(newCarMakers)

// how to use arrays with multiple types
// type of importantDates = (string | Date)[], inferred by ts
// const importantDates = [new Date('2050-10-10'), '2030-12-06'];

// type of importantDates = (string | Date)[], set explicitly by dev
const importantDates: (Date | string)[] = [new Date('2050-10-10'), '2030-12-06'];
importantDates.push('2020-02-15');
importantDates.push(new Date());

// when to use multi typed arrays?
// when we want to represent a collection of records with some arbitrary sort order
