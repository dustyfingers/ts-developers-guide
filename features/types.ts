const today = new Date();
today.getDate();

const person = {
    age: 20
};

// will throw an error
// person.height

class Color {}
const red = new Color();
// this will throw an error. there are no props or methods on instances of the Color class
// red.