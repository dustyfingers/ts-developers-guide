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

// ts knows this is a number because its declared & intialized at the same time
// type = number
// let fruit = 5;

// type = any
let fruit;
fruit = 5;

// ONLY 3 CASES TO USE TYPE ANNOTATION VS JUST LETTING TS INFER IT
// when we declare on one line and initialize later
// when we want a var to have a type that cant be inferred
// when a func returns the 'any' type and we need to clarify the value

// OTHERWISE LET TS INFER TYPES


// ?? when to use annotations?

// 1) when a func returns the 'any' type and we need to clarify the value
const json = '{"x": 10, "y": 20}';

// coords is of type 'any'
// const coords = JSON.parse(json)

// JSON.parse() can return any type!
// JSON.parse('false') => false, type = boolean
// JSON.parse('4') => 4, type = number
// JSON.parse('{"value": 5}') => {value: 5}, type = {value: number}
// JSON.parse('{"name": "alex"}') => {name: "alex"}, type = {name: string}

// so we specify what coords should look like
const coords: {x: number; y: number} = JSON.parse(json)


// 2) when we declare on one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') foundWord = true;
}


// 3) when we want a var to have a type that cant be inferred
const numbers = [-10, -1, 12];
// cant assign number to boolean without type annotation
// let numberAboveZero = false;
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    // cant assign number to boolean without type annotation
    if (numbers[i] > 0) numberAboveZero = numbers[i];
}