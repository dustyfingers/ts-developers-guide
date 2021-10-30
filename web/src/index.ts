import { User } from './models/User';

const user = new User({ name: 'lou', age: 24 });

console.log(user.get('name'));
console.log(user.get('age'));

// before optinal props 
user.set({ name: 'newname', age: 99 });

// after
user.set({ name: 'newnametoo' });
user.set({ age: 123 });

console.log(user.get('name'));
console.log(user.get('age'));