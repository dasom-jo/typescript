import TodoCollenction from "./TodoCollenction";
import TodoItem from "./TodoItem";
import {data} from "./data";


// console.log('my todo list');
// //i = 0 === i:number = 0;타입 추론기능
// for(let i = 0; i < data.length; i++){
//     let todoItem = new TodoItem(data[i].id, data[i].task,data[i].complete)
//     todoItem.printDetails();
// }

const sampleTodos : TodoItem [] =data.map(
    (item)=> new TodoItem(item.id, item.task , item.complete)
);

const myTodoCollection = new TodoCollenction("my todo list", sampleTodos)

//데이터 추가
myTodoCollection.addTodo("js study")
myTodoCollection.addTodo("친구만나기")
//찾기
myTodoCollection.markComplete(3,true)

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item)=> item.printDetails())

// [run] my todo list
// [run] 1 장보기          (complete)
// [run] 2 스터디
// [run] 3 js study                (complete)
// [run] 4 친구만나기