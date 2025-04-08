//함수 타입의 호환성
//특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
/*1.반환값의 타입이 호환되는가
2.매개변수의 타입이 호환되는가
*/

//기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;
let a: A = () => 10; //반환값 :number
let b: B = () => 10; //반환값 : number 리터럴
a = b; //업캐스팅
//b=a; 에러 다운캐스팅

//기준 2. 매개변수의 타입이 호환되는가
//2-1 매개변수의 개수가 같은 경우
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};
//c=d; 매개변수 갯수를 기준으로 할떄는 업캐스팅 불가
d = c;
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//animalFunc = dogFunc; //에러
dogFunc = animalFunc; //

//2-2 매개변수의 개수가 다른 경우
type Func1 = (a:number , b: number) => void;
type Func2 = (a:number) => void;

let func1 : Func1 = (a,b) => {};
let func2 : Func2 = (a) => {};

func1 = func2;
//func2=func1