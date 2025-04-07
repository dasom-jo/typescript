"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter = /** @class */ (function () {
    function NamooSorter(collection) {
        this.collection = collection;
    }
    NamooSorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    NamooSorter.prototype.printCollection = function () {
        console.log(this.collection);
    };
    return NamooSorter;
}());
exports.default = NamooSorter;
