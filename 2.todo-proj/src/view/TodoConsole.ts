import * as inquirer from 'inquirer';
import TodoCollenction from '../service/TodoCollenction';
import TodoItem from '../model/TodoItem';
import { isVoidExpression } from 'typescript';
import { data } from '../data';
import { Commands } from '../model/Commands';

//import prompt from 'inquirer/lib/objects/prompt';
let prompt = inquirer.createPromptModule();

class TodoConsole {
    private todoCollection : TodoCollenction;

    private showCompleted : boolean;

    constructor(){
        this.showCompleted = true;
        const sampleTodos: TodoItem[]=data.map(
            (item)=> new TodoItem(item.id, item.task, item.complete)
        )
        this.todoCollection = new TodoCollenction('My todo list',sampleTodos)
    }
    displayTodoList():void{
    console.log(
        `--------=${this.todoCollection.userName}-----`
        +
        `(-----${this.todoCollection.getItemCounts().incomplete} items todo list)`
    );
    this.todoCollection
        .getTodoItem(this.showCompleted)
        .forEach((item)=> item.printDetails())
    }

    promptUser():void{
        console.clear();
        this.displayTodoList();
            prompt({
                type: 'list',
                name: 'command',
                message: 'Choose option',
                choices: Object.values(Commands),
            }).then((answers) => {
                switch(answers["command"]){
                    case Commands.Toggle:
                        this.showCompleted = !this.showCompleted;
                        this.promptUser();
                        break;
                    case Commands.Add:
                        this.promptAdd();
                        break;
                    case Commands.Purge:
                        this.todoCollection.removeComplete();
                        this.promptUser();
                        break;
                    case Commands.Complete:
                        if(this.todoCollection.getItemCounts().incomplete > 0){
                            this.promptComplete();
                        }else{
                            this.promptUser();
                        }
                        break;
                }
            });
        }

        promptAdd() : void {
            console.clear();
            prompt({
                type:'input',
                name:'add',
                message:'Enter task:'
            }).then((answers)=>{
                if(answers["add"] !== ""){
                    this.todoCollection.addTodo(answers["add"])
                }
                this.promptUser();
            })
        }

        promptComplete(): void {
            console.clear();
            prompt({
                type:'checkbox',
                name:'complete',
                message:'mark tasks Complete',
                choices:this.todoCollection.getTodoItem(this.showCompleted).map((item)=>({
                    name:item.task,
                    value:item.id,
                    checked:item.complete
                }))
            }).then((answers)=>{
                let CompletedTasks = answers["complete"] as number[];
                this.todoCollection.getTodoItem(true).forEach((item) =>
                    this.todoCollection.markComplete(
                        item.id,
                        CompletedTasks.find((id)=> id === item.id) != undefined
                    )
                )
                this.promptUser();
            })
        }
}


export default TodoConsole