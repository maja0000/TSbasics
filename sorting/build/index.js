"use strict";
var Sorter = /** @class */ (function () {
    //   collection: number[];
    //   constructor(collection: number[]) {
    //     this.collection = collection;
    //   }
    // SAME AS
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // array type guard
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                // string type guard
                if (typeof this.collection === 'string') {
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([1, 2, 0, 9, 8, -10]);
sorter.sort();
console.log(sorter.collection);
