import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';

const nums = new NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter(nums);
console.log(nums.data);
sorter.sort();
console.log(nums.data);