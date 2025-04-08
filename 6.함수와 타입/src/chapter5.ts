//사용자 정의 타입 가드

type Dog = {
    name:string;
    isBark:boolean;
}

type Cat = {
    name:string;
    isScratch : boolean;
}

type Animal = Dog | Cat;

function isDog(animal:Animal): animal is Dog /*true면 dog타입이다*/{
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal:Animal): animal is Cat{
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal:Animal){
    if(isDog(animal)){

    }else if ("isScratch" in animal){

    }
}