//  a tuple is an array-like structure where each element represents some property of a record
const drink = {
    color: 'brown',
    carbonated: true, 
    sugar: 50
};

// this being an array allows for the switching and moving of elements
// not good in this case
// const pepsi = ['brown', true, 40];

// laying out the types for each element in order makes this a tuple!!
// const pepsi: [string, boolean, number] = ['brown', true, 40];

// type aliases
type Drink = [string, boolean, number]
const pepsi: Drink = ['brown', true, 40];
const bepis: Drink = ['green', true, 50];
const shastacola: Drink = ['brown', false, 45];

// why tuples?
const carSpecs: [number, number] = [400, 3354]

// objects are clearer at a glance!
const carStats: {horsepower: number; weight: number} = {
    horsepower: 450,
    weight: 3354
}

// more later...