//타입좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
  name: string;
  age: number;
};

//value = number : toFixed
//value = string : toUperrCase
//value = Date : getTime
function func(value: string | number | Date | null | Person) {
  value; //value: string | number
  if (typeof value === "number") {
    console.log(value.toFixed()); //value: number
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); //value: string
  } else if (value instanceof Date) {
    //instanceof 연산자를 사용하여 Date 타입으로 좁히기
    //typeof value === "object" 는 null을 포함하기 때문에 사용하지 않음
    console.log(value.getTime()); //value: Date
  } else if (value && "age" in value) {
    //value instanceof Person
    //형식만 참조한다는 뜻은 Person은 type이다.instanceof는type 불가, class에만 사용가능
    //in 연산자 뒤에는 null이나 undefined가 올 수 없다.
    console.log(`${value.name} is ${value.age} years old`); //value: Person
  }
}
