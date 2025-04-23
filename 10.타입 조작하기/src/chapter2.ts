//keyof 연산자

// interface Person {
//   name: string;
//   age: number;
// }

// const person: Person = {
//     name: "John",
//     age: 30,
//   };

//객체를 통해 타입을 뽑아 낼수도잇음
type Person = typeof person; // Person 타입을 추출

const person = {
  name: "John",
  age: 30,
};

function getPropertyKey(person: Person, key: keyof typeof person) {
  //keyof Person) : Person의 key는 name | age로 추출됨
  //반드시 타입이 와야함 변수 함수 불가능
  return person[key];
}

getPropertyKey(person, "name"); // 'John'

//typeof person === "object"; // true
