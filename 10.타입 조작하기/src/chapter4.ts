//템플릿 리터럴 타입

type Color  = "red" | "green" | "blue";

type Animal = "cat" | "dog" | "fish";

type ColorAnimal = `${Color}-${Animal}`; //템플릿 리터럴 타입
//"red-cat" | "red-dog" | "red-fish" | "green-cat" | "green-dog" | "green-fish" | "blue-cat" | "blue-dog" | "blue-fish"



