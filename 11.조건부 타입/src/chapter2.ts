//분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;
//분산적인걸 막고싶다면
//type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let c: StringNumberSwitch<number | string>;
c = 1; // string
c = "1"; // number

let d: StringNumberSwitch<boolean | string | number>;
//1단계
//StringNumberSwitch<bolean> |
//StringNumberSwitch<number> |
//StringNumberSwitch<string>
//2단계
//number |
//string |
//number

//실용적인 예제

type Exclude<T, U> = T extends U ? never : T;
//1단계
//Exclude<number , string>|
//Exclude<string , string>|
//Exclude<boolean , string>
//2단계
//number|
//never|
//boolean
//결과
//number | never| boolean

type Extract<T, U> = T extends U? T : never;

type B = Extract<number | string | boolean, string>;

//1단계
//Extract<number , string> |
//Extract<string , string> |
//Extract<boolean , string>
//2단계
//never|
//string|
//never
//결과
//never | string | never


