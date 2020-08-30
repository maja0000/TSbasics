"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringCollection_1 = require("./StringCollection");
var Sorter_1 = require("./Sorter");
// numbers
// const numbersCollection = new NumbersCollection([-1, 26, 5, -666, 56]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// strings
var stringCol = new StringCollection_1.StringCollection('Thats-ThE-STRINGG');
var sorter = new Sorter_1.Sorter(stringCol);
sorter.sort();
console.log(stringCol.data);
