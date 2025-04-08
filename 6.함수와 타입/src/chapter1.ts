//함수 타입 표현식과 호출 시그니처

//함수타입 표현식
type Operation = ( a: number, b: number ) => /*매개변수 타입 */ number; /*반환값 타입 */
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;

// 호출 시그니처 (콜 시그니처)
type Operation2 = {
  (a: number, b: number): number;
  name: string; //프로퍼티 추가가능
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;