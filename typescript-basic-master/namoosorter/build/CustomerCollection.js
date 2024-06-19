"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerCollection = /** @class */ (function () {
    function CustomerCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CustomerCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CustomerCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].name.localeCompare(this.data[rightIndex].name) > 0;
    };
    CustomerCollection.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    };
    return CustomerCollection;
}());
exports.default = CustomerCollection;
