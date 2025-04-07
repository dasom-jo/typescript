//타입단언
//타입단언은 타입스크립트에게 '내가 이 값의 타입을 확실히 알고 있다'고 말하는 방법이다.
type Person = {
    name: string;
    age: number;
}

let person = {} as Person; //person은 Person 타입으로 단언
person.name = "jo";
person.age = 10;

type Dog = {
    name: string;
    color:string;
}

let dog = {
    name: "jo",
    color: "black",
    breed : "wlsej"
} as Dog; //dog는 Dog 타입으로 단언

//타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B <- A는 B타입으로 단언
// A 가 b의 슈퍼 타입이거나
//A가 B의 서브 타입이어야함

let num1 = 10 as never; //a(number)가 b(never)의 슈퍼 타입
let num2 = 10 as unknown; //a(number)가 b(unknown)의 서브 타입
//let num3 = 10 as string 에러 발생
let num4 = 10 as unknown as string; //a(unknown)가 b(string)의 서브 타입  좋은 방법은 아님

//const 단언
let num5 = 1 as const;

let cat = {
    name: "jojo",
    color : "red"
}as const; //cat은 const 단언으로 읽기 전용이 된다. 수정 불가

//Non-null 단언
//null이나 undefined가 아닌 값을 단언할 때 사용하는 방법이다.
type Post = {
    title: string;
    author?: string;
}

let post :Post = {
    title:"게시글1",
    author:"jo"
}

//const len1 : number = post.author?.length;
//post.author?.length //undefined가 나옴
const len2 : number = post.author!.length; //post.author가 null이 아님을 단언

