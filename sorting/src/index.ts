import { StringCollection } from './StringCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// numbers
// const numbersCollection = new NumbersCollection([-1, 26, 5, -666, 56]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// strings
const stringCol = new StringCollection('Thats-ThE-STRINGG');
const sorter = new Sorter(stringCol);
sorter.sort();
console.log(stringCol.data);
