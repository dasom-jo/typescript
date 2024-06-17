import TodoItem from "./TodoItem";

class TodoCollenction {
    private nextId : number = 1;
    constructor(public userName:string, public todoItems:TodoItem[]=[] ){}

    getTodoById(id: number): TodoItem | undefined{
        //반환값의 정확한 타입:undefined:id가 없을수잇음
        return this.todoItems.find((item) => item.id === id);
    }

    addTodo(task:string) : number {
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId;
    }
    markComplete(id:number, complete:boolean):void{
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete
        }
    }
}

export default TodoCollenction;