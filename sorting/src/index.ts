import { LinkedList } from './LinkedList';
import { StringCollection } from './StringCollection';
import { NumbersCollection } from './NumbersCollection';

// NUMBERS
const numbersCollection = new NumbersCollection([-1, 26, 5, -666, 56]);
numbersCollection.sort();
console.log('ARRAY OF NUMS : ');
console.log(numbersCollection.data);

// STRINGS
const stringCol = new StringCollection('Thats-ThE-STRINGG');
stringCol.sort();
console.log('SORTED STRING : ');
console.log(stringCol.data);

// LINKED LIST
const linkedList = new LinkedList();
linkedList.add(598);
linkedList.add(-3);
linkedList.add(0);
linkedList.add(47);

linkedList.sort();
console.log('SORTED LINKED LIST : ');
linkedList.print();
