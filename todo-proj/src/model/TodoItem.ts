class TodoItem {
    //constructor 메소드는 클래스의 생성자 함수,클래스를 인스턴스화할때 호출,클래스 내부에 한번만 호출
    constructor(
        public id:number,
        public task:string,
        public complete:boolean = false){
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    printDetails(): void{
        console.log(
            `${this.id}\t${this.task}\t${this.complete ? "\t(complete)":""}`
        );
    }
}
export default TodoItem;