import { LinkedList } from './LinkedList';
import { StringCollection } from './StringCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// NUMBERS
const numbersCollection = new NumbersCollection([-1, 26, 5, -666, 56]);
const sorter1 = new Sorter(numbersCollection);
sorter1.sort();
console.log('LINKED ARRAY OF NUMS : ');

console.log(numbersCollection.data);

// STRINGS
const stringCol = new StringCollection('Thats-ThE-STRINGG');
const sorter2 = new Sorter(stringCol);
sorter2.sort();
console.log('SORTED STRING : ');

console.log(stringCol.data);

// LINKED LIST
const linkedList = new LinkedList();
linkedList.add(598);
linkedList.add(-3);
linkedList.add(0);
linkedList.add(47);

const sorter3 = new Sorter(linkedList);
sorter3.sort();
console.log('SORTED LINKED LIST : ');
linkedList.print();
