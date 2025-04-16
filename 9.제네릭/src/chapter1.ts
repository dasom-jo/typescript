// 타입 변수 활용하기

// 첫번째 사례 : 타입 변수
function swap<T>(a: T, b: T) {
  return [b, a];
}

// const [a, b] = swap("1",2) 같은 타입 이여야함
const [a, b] = swap(1, 2); // 가능

function swap1<T, U>(A: T, B: U) {
  return [B, A];
}

const [A, B] = swap1("1", 2);

//두번째 사례
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]); // number[]
let str = returnFirstValue(["1", "2", "3"]); // string[]
let str1 = returnFirstValue([1, "1", "2", "3"]); // (string | number)[]

//세번째 사례
//length라는 프로퍼티를 가진 타입을 제약조건으로 설정
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("123"); // 3
let var3 = getLength({ length: 1 }); // 1
//let var4 = getLength(10); // length가 없기 때문에 에러 발생
