//함수 타입의 정의
//함수를 설명하는 가장 좋은 방법
//어떤 매개변수를 받고 , 어떤 결과값을 변환하는지 이야기
//어떤 타입의 매개 변수를 받고 어떤 타입의 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b; //반환값추론
}

//화살표 함수의 타입을 정의
const add = (a: number, b: number): number => a + b;

//함수의 매개변수
function introduce(name = "조다솜",age:number, tall?: number) { //매개변수는 반드시 선택적 매개 변수보다 앞에
  console.log(`name:${name}`);
  if (typeof tall === "number") {
    console.log(`${tall}+10`);
  }
}

//introduce(1);에러
introduce("조다솜",17, 170); //name:조다솜, 170

function getSum(...rest:number[]){ //rest 가변적인 매개변수를 변수로 묶어서
    let sum = 0;
    rest.forEach((it)=>(sum += it))
    return sum;
}

getSum(1,2,3)