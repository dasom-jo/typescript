//조건부 타입
type A = number extends string ? string : number;

type ObjA = {
    a:number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;

//제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

type varA = StringNumberSwitch<number>; // string
type varB = StringNumberSwitch<string>; // number

//함수오버로딩
function removeSpaces<T>(text : T) : T extends string ? string : undefined;

function removeSpaces(text : any) {
    if (typeof text === "string") {
        return text.replaceAll(" ","");
    }else {
        return undefined;
    }
}

let result = removeSpaces("hello world");
console.log(result); // helloworld

let result2 = removeSpaces(undefined)