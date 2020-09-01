"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var StringCollection_1 = require("./StringCollection");
var NumbersCollection_1 = require("./NumbersCollection");
// NUMBERS
var numbersCollection = new NumbersCollection_1.NumbersCollection([-1, 26, 5, -666, 56]);
numbersCollection.sort();
console.log('ARRAY OF NUMS : ');
console.log(numbersCollection.data);
// STRINGS
var stringCol = new StringCollection_1.StringCollection('Thats-ThE-STRINGG');
stringCol.sort();
console.log('SORTED STRING : ');
console.log(stringCol.data);
// LINKED LIST
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(598);
linkedList.add(-3);
linkedList.add(0);
linkedList.add(47);
linkedList.sort();
console.log('SORTED LINKED LIST : ');
linkedList.print();
