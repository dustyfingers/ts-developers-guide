import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharCollection } from './CharCollection';
import { LinkedList } from './LinkedList';

const nums = new NumberCollection([10, 3, -5, 0]);
const numSorter = new Sorter(nums);

const str = new CharCollection('qwerasvunwearlkgjnerpguernpeirugnseorgiungzjdsfgnaakaaaisbbbdfjkabsfksabedfyawsebfjkyefbasjeyfxxdddcc');
const charSorter = new Sorter(str);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const linkedListSorter = new Sorter(linkedList);

console.log(nums.data);
numSorter.sort();
console.log(nums.data);

console.log(str.data);
charSorter.sort();
console.log(str.data);

linkedListSorter.sort();
linkedList.print();