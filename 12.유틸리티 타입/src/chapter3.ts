//조건부 타입 기반의 유틸리티 타입 Exclude, Extract, ReturnType

//Exclude<T,U> 제외하다, 추방하다. T에서 U를 제거하는 타입
type Exclude<T,U> = T extends U ? never : T;
//1단계
//Exclude<string, boolean > |
//Exclude<boolean, boolean>

//2단계
//string |
//never

//최종적으로
//string

type A = Exclude<string | boolean , boolean >;

// Extract<T, U>
// T에서 U를 추출하는 타입

type ReturnType<T extends (...args: any) => any> = T extends (
    ...agrs: any
) => infer R
 ? R
 : never;

//retruntype<T>
//함수의 반한값 타입을 추출하는 타입

function funcA() {
    return "hi"
}

function funcB() {
    return 10;
}

type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;