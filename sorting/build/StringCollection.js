"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
// sort strings
var StringCollection = /** @class */ (function () {
    function StringCollection(data) {
        this.data = data;
    }
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    StringCollection.prototype.compare = function (indexLeft, indexRight) {
        return (this.data[indexLeft].toLowerCase() > this.data[indexRight].toLowerCase());
    };
    StringCollection.prototype.swap = function (indexLeft, indexRight) {
        var arr = this.data.split('');
        var leftElement = arr[indexLeft];
        arr[indexLeft] = arr[indexRight];
        arr[indexRight] = leftElement;
        this.data = arr.join('');
    };
    return StringCollection;
}());
exports.StringCollection = StringCollection;
