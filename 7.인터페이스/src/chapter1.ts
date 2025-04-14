// 인터페이스의 확장

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal { //확장or 상속 문법
    isBark: boolean
    //name: number 동일한 프로퍼티의 타입을 재정의할때는 반드시 원본 프로퍼티의 타입의 서브타입이 되도록
    //다시 정의해줘야한다
}

const dog:Dog = {
    name: "",
    color:"",
    isBark:true,
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly : boolean;
}

interface DogCat extends Dog, Cat {

}

const dogCat : DogCat = { //다중확장 가능
    name: "",
    color: "",
    isBark:true,
    isScratch:true,
}