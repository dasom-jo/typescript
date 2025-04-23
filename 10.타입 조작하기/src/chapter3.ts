//맵드 타입

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; //key : value
  //{id : User ["id"] number 타입
  //name : User ["name"] string 타입
  //age : User ["age"] number 타입
  //} 객체 타입
  // ? 전부 선택적 프로퍼티
};

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
  //[key in keyof User] : boolean
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

//한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // 가능
  return {
    id: 1,
    name: "kim",
    age: 30,
  };
}

//한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  //수정하는 기능
}

updateUser({
  id: 1,
  name: "kim",
  age: 25,
});
