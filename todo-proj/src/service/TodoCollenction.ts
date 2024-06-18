import { ItemCounts } from "../model/ItemCounts";
import TodoItem from "../model/TodoItem";

class TodoCollenction {
    private nextId : number = 1;

    private itemMap : Map<number, TodoItem>;

    constructor(public userName:string, public todoItems:TodoItem[]=[] ){
        this.itemMap = new Map<number, TodoItem>();
        todoItems.forEach((item)=>this.itemMap.set(item.id, item))
    }

    getTodoById(id: number): TodoItem | undefined{
        //반환값의 정확한 타입:undefined:id가 없을수잇음
        //return this.todoItems.find((item) => item.id === id);
        return this.itemMap.get(id)
    }

    addTodo(task:string) : number {
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        //this.todoItems.push(new TodoItem(this.nextId, task));
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task))
        return this.nextId;
    }
    //includeCoplete -> true:모든할일 목록
    //includeCoplete -> false:완료목록은 제외한 할일 목록
    getTodoItem(includeComplete: boolean): TodoItem[]{
        return[...this.itemMap.values()].filter(
            (item) => includeComplete || !item.complete
        )
    }

    removeComplete():void{
        this.itemMap.forEach((item)=>{
            if(item.complete){
                this.itemMap.delete(item.id)
            }
        })
    }
    //전체할일목록과 완료되지않은 할일목록 반환
    getItemCounts(): ItemCounts {
        return{
            total : this.itemMap.size,
            incomplete: this.getTodoItem(false).length
        }
    }

    markComplete(id:number, complete:boolean):void{
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete
        }
    }
}

export default TodoCollenction;