// dont actually need the return type annotation - better to use it though
// const add = (a: number, b: number) => {
//     return a + b;
// }

const add = (a: number, b: number): number => {
    return a + b;
}

// ts sees we are not returning anything and sees nothing wrong!
const subtract = (a: number, b: number) => {
    a - b;
}

// ts knows we need to return a number so it whines
// const subtract = (a: number, b: number): number => {
//     a - b;
// }

// need to return a number
const subtractCorrect = (a: number, b: number): number => {
    return a - b;
}

// for regular functions
function divide(a: number, b: number): number {
    return a / b;
}

// for anonymous functions
const multiply = function(a: number, b: number): number {
    return a * b;
}

// doesnt return anything
const logger = (message: string): void => {
    console.log(message);
}

// never reach end of execution! we throw an error
const throwError = (message: string): never => {
    throw new Error(message);
}

// we may return a string!
const throwErrorSometimesWReturn = (message: string): string => {
    if (!message) throw new Error(message);

    return message;
}

// may reach the end of execution and not return anything
const throwErrorSometimes = (message: string): void => {
    if (!message) throw new Error(message);
}


// destructuring with annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

// no destructuring
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// }

const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather)