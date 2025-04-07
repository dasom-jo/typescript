// let data = {
//     name: '다솜이네 집밥',
//     category:'western',
//     address:{
//       city:"incheoi",
//       detail:'somwhere',
//       zipCode:24324854
//     },
//     meun:[{name: "김치찌개",price:2000,category:"찌개"},
//           {name: "된장찌개",price:2000,category:"찌개"},
//           {name: "갈비찜",price:2000,category:"찜"},
//           {name: "김치찜",price:2000,category:"찜"},
//           {name: "갈치구이",price:2000,category:"구이"},
//           {name: "고등어구이",price:2000,category:"구이"},]
//   }
//메서드가 다를뿐
//interface
//data 타입을 이곳에서 type으로 지정
export type Restaurant = {
    name:string;
    category:string;
    address: Address;
    menu:Menu[]
    //는 TypeScript에서 배열을 나타내는 문법입니다.
    //menu 필드는 배열이며, 각 요소는 메뉴 항목을 설명하는 객체입니다
}
//타입을 따로 빼기
export type Address = {
    city:string;
    detail:string;
    zipCode:number;
}
export type Menu ={
    name:string,
    price:number;
    category:string;
}

//타입안에서 일부 정보 뺼때
export type AddressWithoutZip = Omit<Address,'zipCode'>
//타입안에 하나만 가져오고싶을떄
export type RestaurantOnlyCategor = Pick<Restaurant,'category'>

//백엔드에서응답값을   타입 처리할때
// export type ApiRespons<T>{
//     data:T[],
//     totalPage:number,
//     page:number
// }

// export RestaurantResponse = AptResponse<Restaurant>