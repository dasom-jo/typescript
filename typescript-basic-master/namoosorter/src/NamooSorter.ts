class NamooSoter {

    constructor(private collection : number[] | string){}

    sort():number[]{

        const {length} = this.collection;

        for(let i = 0; i <length; i++){
            for(let j = 0; j<length -i -1;j++){
                // if(this.collection[j] > this.collection[j+1]){
                //     //swap
                //     const temp = this.collection[j];
                //     this.collection[j] = this.collection[j+1];
                //     this.collection[j+1] = temp;
                // }
            }
        }
        return this.collection;
    }
}

export default NamooSoter;