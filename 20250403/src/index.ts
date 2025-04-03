import { finalization } from "process";

console.log("hello new ");

//unknown 타입 => 전체 집합
function unknownExam() {
  // unknown 타입은 모든 타입의 상위(슈퍼) 타입으로, 어떤 값이든 할당할 수 있습니다. 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
}

//never 타입 => 모든 타입의 서브 타입
function neverExam() {
    function neverFunc(): never{
        while(true){}
    }
    //never 타입은 모든 타입의 서브 타입이기 때문에 어떤 타입의 변수에도 할당 가능
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
    //다운캐스팅 안됨
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

// void 타입 => undefined, null만 할당 가능
// strict 설정이 꺼져 있으면 null도 가능
function voidExan() {
    function voidFunc(): void {
        console.log("HI");
    }
    let voidVar: void = undefined;
}

//any타입 -> 치트키 타입, 모든 타입 허용, 타입 체크 안함,never 빼고
function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;
    //타입 계층도 무시
    anyVar = unknownVar; // unknown -> any 가능
    undefinedVar = anyVar; // any -> undefined 가능
    //never 은 어떤 타입도 다운 캐스팅 불가
    //neverVar = anyVar; // any -> never 가능
}