//프로미스 와 제네릭
//프로미스는 제네릭 클래스 기반이기에 타입을 저장할수있지만 실패했을때는 정의할수없다
//타입변수 빼먹으며 unknown
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //resolve(20);
    reject(new Error("error"));
  }, 3000);
});

promise.then((response) => {
  console.log(response * 20); //20
});

promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});

//프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "타입스크립트",
        content: "타입스크립트는 자바스크립트의 상위 집합이다",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
