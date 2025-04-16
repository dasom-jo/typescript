//제네릭 인터페이스와 제네릭 타입 별칭
/**
 * 타입변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파리미터
 */

//제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}
//제네릭 인터페이스를 사용할때 반드시 타입으로 정의할때 타입 변수에 할당할 타입을 꺽쇠와 같이 할당
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

//인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -4564,
  key2: 4654,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

//제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "value",
};

//제네릭 인터페이스의 활용예시--------------------------------------------------------
//-> 유저 관리 프로그램
//-> 유저 구분: 학생/개발자

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: Student | Developer;
}

function goToSchool(user: User<Student>) {
  if (user.profile.type !== "student") {
    console.log("nono");
    return;
  }

  const school = user.profile.school;
  console.log(`학교에 ${user.name}님이 ${school}에 갑니다.`);
}

const developerUser: User<Developer> = {
  name: "jodasom",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "jodasom1",
  profile: {
    type: "student",
    school: "school",
  },
};
