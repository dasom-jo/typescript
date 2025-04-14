// 선언합침 : 인터페이스는 동일한 이름으로 중복 선언이 가능

interface Person {
    name:string;
}

interface Person {
    //name : number 오류임, 충돌 허용불가
    age:number;
}

interface Developer extends Person {
    name: "hello";
}

const person : Person = {
    name: "",
    age:27
}

// 모듈 보강시
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string; //여기서 추가 2
}

const lib : Lib = {
    a:1,
    b:2,
    c:"hello" //추가하고싶을시 1
}