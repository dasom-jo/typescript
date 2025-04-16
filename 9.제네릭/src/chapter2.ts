//map, forEach 메소드 타입 정의하기

//map 메서드
const arr = [1,2,3];
const newArr = arr.map((it)=> it *2);
//console.log(newArr); // [2, 4, 6]

function map<T,U>(arr:T[],callback:(item:T)=>U){
    let result = [];
    for (let i = 0; i< arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (item) => item * 2);
map (["hi", "hello"], (item) => item.toUpperCase());

//forEach 메서드
const arr2 = [1,2,3];
const newArr2 = arr2.forEach((it)=> it *2);

function forEach<T>(arr: T[], callback: (item: T) => void) { // void 인 이유는 반환값이 없기 때문
    for (let i = 0; i<arr.length; i++){
        callback(arr[i])
    }
}

forEach(arr2, (it) => {
    console.log(it.toFixed());
})