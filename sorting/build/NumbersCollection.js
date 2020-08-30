"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // getter will work more as a property than a method
        // (collection.length)
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (indexLeft, indexRight) {
        return this.data[indexLeft] > this.data[indexRight];
    };
    NumbersCollection.prototype.swap = function (indexLeft, indexRight) {
        // swap
        var leftElement = this.data[indexLeft];
        this.data[indexLeft] = this.data[indexRight];
        this.data[indexRight] = leftElement;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
