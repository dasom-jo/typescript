import NamooSorter from './NamooSorter'
import NumbersCollection from './NumbersCollection'
import CharactersCollection from './CharactersCollection';
import CustomerCollection from "./CustomerCollection"
import { Customer } from './Customer';
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

let numCollection = new NumbersCollection([10,-7,55,3,21])
let charCollection = new CharactersCollection('TypeScript')
let customerCollection = new CustomerCollection([
    new Customer('A111','Kim'),
    new Customer('B111','Park'),
    new Customer('C111','Lee'),
])
//let sorter = new NamooSorter(numCollection);
//let sorter = new NamooSorter(charCollection)
let sorter = new NamooSorter(customerCollection)
sorter.sort();
console.log(sorter.printCollection());
