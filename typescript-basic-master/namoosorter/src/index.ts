import NamooSoter from './NamooSorter'

const sorter = new NamooSoter([10,-7,22,3,15])
console.log(sorter.sort());

// const sorterStr = new NamooSoter("typescript")
// console.log(sorterStr.sort());

//사용자 정의 타입가드
let data : string | number [];
function isString(data: string | number[]) : data is string{
    return (<string>data).split !== undefined;
}

if(typeof data === 'string'){
    
}

data = 'typescript';
if(isString(data)){
    data.split('');
}else{
    //number []
}