import NumbersCollection from './NumbersCollection';

interface Sortable{
    length:number;
    compare(leftIndex:number, rightIndex:number):boolean;
    swap(leftIndex:number, rightIndex:number) : void;
} //굳이 inprement 하지않아도 전달 가능 덕타이핑
class NamooSorter {
    constructor(private collection: Sortable) {}

    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }

    printCollection(): void {
        console.log(this.collection);
    }
}

export default NamooSorter;