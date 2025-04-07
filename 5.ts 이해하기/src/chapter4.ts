//대수타입 -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
//합집합 타입과 교집합 타입 존재

//합집합 타입 - union type
//여러개의 타입을 합쳐서 새로운 타입을 만드는 것
//ex) string | number
//ex) string | number | boolean .....
let a : string | number;
a = 1;
a = "1";
//a = true;

let arr : (number | string | boolean)[] = [1, "1", true];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name : string;
    language : string;
}

type Union1 = Dog | Person; //Dog와 Person의 합집합 타입

let union1 : Union1 = {
    name : "",
    color : ""
}

let union2 : Union1 = {
    name : "",
    language : "",
}

let union3 : Union1 = {
    name : "",
    color : "",
    language : ""
}

//dog 와 person은 교집합 타입일뿐, {color,{name},language}
// let union4 : Union1 = {
//     name : ""
// }

//교집합 타입 - intersection type
//여러개의 타입을 교차해서 새로운 타입을 만드는 것
//ex) string & number
//ex) string & number & boolean .....
let variable : number & string;

type Dog1 = {
    name: string;
    color: string;
}

type Person1 = {
    name : string;
    language : string;
}

type intersection = Dog1 & Person1; //Dog와 Person의 교집합 타입
//합집합과는 다르게 모든 프로퍼티가 필수로 들어가야함
//Dog와 Person의 모든 프로퍼티가 들어가야함
let intersection1 : intersection = {
    name : "",
    color : "",
    language : ""
}