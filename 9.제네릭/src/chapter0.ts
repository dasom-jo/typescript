// 제네릭

function func<T>(value: T): T {
    return value;
}

let num = func(10);

if (typeof num === "number") {
    num.toFixed();
}

let bool = func(true);

let str = func("hello");