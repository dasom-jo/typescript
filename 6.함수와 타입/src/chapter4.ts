//함수 오버로딩 ,오직 타입에서만 적용
//함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
/*
-> 하나의 함수 func
-> 모든 매개변수의 타입 number
-> ver1. 매개변수가 1 개 -> 이 매개변수에 20을 곱한 값 출력
-> ver2. 매개변수가 3개 -> 이 매개변수를 다 더한 값을 출력
*/

//버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//함수 구현부 => 구현 시그니처
function func(
  a: number,
  b?: number,
  c?: number
) /*오버로드 시그니처를 참고해서 작성해야함,선택적 프로퍼티로 모든 오버로드 시그니처가 의미있도록 함*/ {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

//func();
func(1);
//func(1,2)
func(1, 2, 3);
