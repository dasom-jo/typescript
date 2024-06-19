
class NumbersCollection {
    constructor(private data: number[]){}

    get length(): number{
        return this.data.length;
    }

    compare(leftIndex : number, rightIndex:number):boolean{
        return this.data[leftIndex] > this.data[rightIndex];
    }
    //자리를 바꿔주는 매소드
    swap(leftIndex : number, rightIndex:number):void{
        const temp = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
export default NumbersCollection;