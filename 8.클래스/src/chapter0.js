// 클래스

let studentA = {
    name:"홍길동",
    grade:"A+",
    age:27,
    study(){
        console.log("열심히 공부함");
    },
    introduce(){
        console.log("안녕하세요");
    }
}

// let studentB = {
//     name:"김철수",
//     grade:"B",
//     age:25,
//     study(){
//         console.log("열심히 공부함");
//     },
//     introduce(){
//         console.log("안녕하세요");
//     }
// }

class Student {
    //필드
    name;
    grade;
    age;

    //생성자
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    //메서드
    study(){
        console.log("열심히 공부함");
    }
    introduce(){
        console.log(`안녕하세요 ${this.name}입니다.`);
    }
}

class StudentDevelper extends Student{
    //필드
    // name;
    // grade;
    // age;
    favoriteSkill;

    //생성자
    constructor(name, grade, age, favoriteSkill){
        // this.name = name;
        // this.grade = grade;
        // this.age = age;
        super(name, grade, age); //부모의 생성자 호출
        this.favoriteSkill = favoriteSkill;
    }

    //메서드
    // study(){
    //     console.log("열심히 공부함");
    // }
    // introduce(){
    //     console.log(`안녕하세요 ${this.name}입니다.`);
    // }
    programming (){
        console.log(`${this.favoriteSkill}로 프로그래밍함`);
    }
}

//클래스를 이용해서 만든 객체  => 인스턴스
let studentB = new Student("이정환","a",27) //생성자 생성
console.log(studentB);
studentB.study(); //메서드 호출

const studentDeveloper = new StudentDevelper("이정환","a",27,"자바스크립트") //생성자 생성