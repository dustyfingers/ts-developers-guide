// nothing to do with generics
const add = (a: number, b: number): number => {
  return a + b;
}

// but what if you want to hold a string? define a new class and sub out the data type? silly. 
// class HoldNumber {
//   data: number;
// }

// const holdNumber = new HoldNumber();
// holdNumber.data = 123;

// use a generic instead!
// TypeOfData will be string, number, etc
// similar to a function argument but for classes
// convention is to use T but it can be called anything
class HoldAnything<TypeOfData>{
  data: TypeOfData
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdString = new HoldAnything<string>();
holdString.data = '123';

