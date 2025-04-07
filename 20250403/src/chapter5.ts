//타입 추론
// 타입스크립트는 변수를 선언하고 초기화하는 상황에서는 타입을 추론한다.
//타입을 추론하는 기준은 변수의 초기값
let a = 1;
let b = "hello" //커서 올리며string  으로 타입 추론
let c = {
    id:1,
    name:"jo",
    profile: {
        nickname:"jojo",
    },
    urls : ["https://jodaosmile.com", "https://jo.com"],
};
let {id, name, profile} = c; //구조 분해 할당

function func() {
    return "hello";
}
//any 타입의 진화 ,명시적으로 any타입을 정의하면 진화하지않는다
let d; //암묵적인 any 타입
d=10
d//number 타입
d.toFixed();
d = "hello";
d; //string 타입
d.toUpperCase();

//const 키워드
//상수라서 재할당이 불가능하다. 하지만 객체의 프로퍼티는 변경 가능하다.
const num = 10; //넘버 리터럴 타입




