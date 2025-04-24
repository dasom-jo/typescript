//infer 추론
// infer 키워드를 사용하여 타입을 추론할 수 있다.
// infer는 조건부 타입에서만 사용할 수 있다.

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type C = ReturnType<number>; // never

//예제
//1.T는 프로미스 타입이어야한다
//2. 프로미스 타입의 결과값 타입을 반환해야한다
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string