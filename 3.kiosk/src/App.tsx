import React, { useState } from 'react';
import './App.css';
import { Store } from './Store';
import {Address, Restaurant} from "./model/resturant"
import { BestMenu } from './BestMenu';

let data:Restaurant = {
  name: '다솜이네 집밥',
  category:'western',
  address:{
    city:"incheoi",
    detail:'somwhere',
    zipCode:24324854,
  },
  menu:[{name: "김치찌개",price:2000,category:"찌개"},
        {name: "된장찌개",price:2000,category:"찌개"},
        {name: "갈비찜",price:2000,category:"찜"},
        {name: "김치찜",price:2000,category:"찜"},
        {name: "갈치구이",price:2000,category:"구이"},
        {name: "고등어구이",price:2000,category:"구이"},]
}

const App:React.FC=()=> {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data); //<>제네릭문법 레스토랑 타입
  const changeAddress = (address:Address) =>{
    setMyRestaurant({...myRestaurant,address:address})
  }
  const showBestMenuName = (name:string) =>{
    return name
  }

  return (
    <div className="App">
      <Store info={myRestaurant}  changeAddress = { changeAddress }/>
      <BestMenu
        name = '순두부찌개'
        price = {5200}
        showBestMenuName = {showBestMenuName}/>
    </div>
  );
}

export default App;
