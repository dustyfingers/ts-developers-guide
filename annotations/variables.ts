// this is type annotation...we are annotating to the ts compiler what type a var is
let apples: number = 5;

// this is okay
apples = 7;

// this is not
// apples = 'woohoo';

// primitive types
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays?
// an array of strings
const colors: string[] = ['red', 'green', 'blue'];
const ages: number[] = [1, 2, 3, 4, 5];
const truths: boolean[] = [true, true, false];

// classes?
class Car {}
const car:Car = new Car();

// object literal
// notice the semicolon down there, not a comma
const point: { x:number; y:number } = {
    x: 10,
    y: 20
}

// this will throw an error
// const pointTwo: { x:number; y:number } = {
//     x: '14',
//     y: 20
// }

// function type annotation
// the part directly after logNumber is the functions type annotation
// this func takes in a number, i, and returns nothing 
const logNumber: (i: number) => void = (i: number) => console.log(i);

// ! literally none of these type annotations are required as it stands. 
// ! the ts type inference system takes care of these cases!