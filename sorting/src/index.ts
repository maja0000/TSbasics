import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([-1, 26, 5, -666, 56]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
