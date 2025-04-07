//기본타입간의 호환성

let num1:number = 12;
let num2:12 = 12;

num1=num2

//객체 타입간의 호환성
//구조적 타입 시스템 (Structural Type System)
//타입스크립트는 객체 타입을 비교할 때, 속성의 이름과 타입을 기준으로 비교합니다.
type Animal = {
    name:string;
    color:string;
}

type Dog = {
    name:string;
    color:string;
    bread:string;
}

let animal:Animal = {
    name:"dog",
    color:"black"
}

let dog:Dog = {
    name:"ehdehd",
    color:"black",
    bread:"치와와"
}
//가능 : animal이 슈퍼타입이기때문 , 객체도 기본타입처럼 슈퍼,서브관계를 맺음
//프로퍼티를 기준으로 관계를 맺음
animal = dog;
//불가능
//dog=animal

//슈퍼타입--------------------------------------------------------------
type Book = {
    name:string;
    price:number;
}
//서브타입
type ProgrammingBook = {
    name:string;
    price:number;
    skill:string;
}

let book:Book;
let  programmingBook:ProgrammingBook = {
    name:"typescript",
    price:10000,
    skill:"typescript"
}

book = programmingBook; // 가능
//programmingBook = book; // 불가능

let book2 : Book = {
    name:"typescript",
    price:10000,
    //초과 프로퍼티 검사 : 객체 리터럴을 사용하면 타입스크립트가 자동으로 프로퍼티를 검사합니다.
    //skill:"typescript" //error: 'skill' does not exist in type 'Book'
}
//초과 프로퍼티 검사 해제
let book3:Book = programmingBook;
