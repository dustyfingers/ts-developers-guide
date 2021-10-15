import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharCollection } from './CharCollection';

const nums = new NumberCollection([10, 3, -5, 0]);
const numSorter = new Sorter(nums);

const str = new CharCollection('qwerasvunwearlkgjnerpguernpeirugnseorgiungzjdsfgnaakaaaisbbbdfjkabsfksabedfyawsebfjkyefbasjeyfxxdddcc');
const charSorter = new Sorter(str);

console.log(nums.data);
numSorter.sort();
console.log(nums.data);

console.log(str.data);
charSorter.sort();
console.log(str.data);