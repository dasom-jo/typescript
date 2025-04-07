//서로소 유니온 타입
/*교집합이 없는 타입들로만 만든 유니온 타입을 말함*/
//tag라는 프로퍼티를 통해 스티링 리터럴 타입으로 지정하면 서로소 유니온 타입을 만들 수 있다.
//동시에 여러가지 상태를 표현해야 되는 경우 서로소 유니온 타입을 사용하면 좋다.
type Admin = {
  tag: "Admin"; //태그를 붙여서 구분하기, 태그드 유니온 타입
  name: string;
  kickCount: number;
};

type Member = {
  tag: "Member"; //태그를 붙여서 구분하기
  name: string;
  point: number;
};

type Guest = {
  tag: "Guest"; //태그를 붙여서 구분하기
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; //서로소 유니온 타입

//Admin : {name}님 현재까지 {kickCount}명 강퇴했습니다.
//Member : {name}님 현재까지 {point}점 모았습니다.
//Guest : {name}님 현재까지 {visitCount}번 방문했습니다.
function login(user: User) {
  //방법 1
  if (user.tag === "Admin") {
    //tag를 통한 완벽한 조건 분리
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "Member") {
    console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
  }
  //방법2
  switch (user.tag) {
    case "Admin":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "Member":
      console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
      break;
    case "Guest":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
      break;
  }
}
//?나 !를 사용하는건 좋은 방법이 아니기에 서로소 유니온 타입을 사용
type LoadingTask = {
    state : "loading"
}

type FailedTask = {
    state : "failed"
    error : {
        message : string
    }
}

type SuccessTask = {
    state : "success"
    response : {
        data:string
    }
}
// type AsyncTask = {
//   state: "loading" | "failed" | "success"; //상태를 나타내는 프로퍼티
//   error?: {
//     message: string; //오류 메시지
//   };
//   response?: {
//     data: string; //성공시 데이터
//   };
// };
type AsyncTask = LoadingTask | FailedTask | SuccessTask; //서로소 유니온 타입으로 정의

function processResult(task: AsyncTask) {
  //task의 상태에 따라 처리
  switch (task.state ) {
    case "loading": {
      console.log("로딩중");
      break;
    }
    case "failed": {
      console.log(`오류 발생: ${task.error.message}`);
      break;
    }
    case "success": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

//비동기 작업의 결과를 처리하는 객체
const loading: AsyncTask = {
  state: "loading",
};
const failed: AsyncTask = {
  state: "failed",
  error: {
    message: "오류 발생원인",
  },
};
const success: AsyncTask = {
  state: "success",
  response: {
    data: "성공",
  },
};
