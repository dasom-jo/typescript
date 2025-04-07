// import TodoCollenction from "./service/TodoCollenction";
// import TodoItem from "./model/TodoItem";
// import {data} from "./data";
import TodoConsole from "./view/TodoConsole";

// // console.log('my todo list');
// // //i = 0 === i:number = 0;타입 추론기능
// // for(let i = 0; i < data.length; i++){
// //     let todoItem = new TodoItem(data[i].id, data[i].task,data[i].complete)
// //     todoItem.printDetails();
// // }

// const sampleTodos : TodoItem [] =data.map(
//     (item)=> new TodoItem(item.id, item.task , item.complete)
// );

// const myTodoCollection = new TodoCollenction("my todo list", sampleTodos)

// //데이터 추가
// myTodoCollection.addTodo("js study")
// myTodoCollection.addTodo("친구만나기")
// //찾기
// myTodoCollection.markComplete(3,true)

// console.log(`${myTodoCollection.userName}`);
// //myTodoCollection.todoItems.forEach((item)=> item.printDetails())

// //완료된거 삭제
// myTodoCollection.removeComplete();

// //includeCoplete -> true:모든할일 목록
// myTodoCollection.getTodoItem(true).forEach((item)=>item.printDetails());
// console.log("-----------------------------------------");
//     //includeCoplete -> false:완료목록은 제외한 할일 목록
// myTodoCollection.getTodoItem(false).forEach((item)=>item.printDetails());
// // [run] my todo list
// // [run] 1 장보기          (complete)
// // [run] 2 스터디
// // [run] 3 js study                (complete)
// // [run] 4 친구만나기

//todoconsole이후

const todoConsole = new TodoConsole();
todoConsole.promptUser();

//TypeScript 파일을 터미널에서 실행할 때 JavaScript 파일이 생성되는 이유는
// TypeScript는 고수준의 정적 타입 언어로, JavaScript 런타임 환경에서 실행되기 위해
// JavaScript 코드로 변환되어야 하기 때문입니다.
// 이 과정에서 TypeScript 컴파일러(tsc)가 TypeScript 코드를 JavaScript 코드로 변환합니다.