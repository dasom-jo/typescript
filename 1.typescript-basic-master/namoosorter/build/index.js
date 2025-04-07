"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter_1 = __importDefault(require("./NamooSorter"));
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var CustomerCollection_1 = __importDefault(require("./CustomerCollection"));
var Customer_1 = require("./Customer");
// let sorter = new NamooSorter([10,-7,22,3,15])
// console.log(sorter.sort());
// // const sorterStr = new NamooSorter("typescript")
// // console.log(sorterStr.sort());
// sorter = new NamooSorter("typescript")
//사용자 정의 타입가드
// let data : string | number [];
// function isString(data: string | number[]) : data is string{
//     return (<string>data).split !== undefined;
// }
// if(typeof data === 'string'){
// }
// data = 'typescript';
// if(isString(data)){
//     data.split('');
// }else{
//     //number []
// }
var numCollection = new NumbersCollection_1.default([10, -7, 55, 3, 21]);
var charCollection = new CharactersCollection_1.default('TypeScript');
var customerCollection = new CustomerCollection_1.default([
    new Customer_1.Customer('A111', 'Kim'),
    new Customer_1.Customer('B111', 'Park'),
    new Customer_1.Customer('C111', 'Lee'),
]);
//let sorter = new NamooSorter(numCollection);
//let sorter = new NamooSorter(charCollection)
var sorter = new NamooSorter_1.default(customerCollection);
sorter.sort();
console.log(sorter.printCollection());
