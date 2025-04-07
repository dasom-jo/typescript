import React from 'react'
import { Address, Restaurant } from './model/resturant'


interface OwnProps  {
    info: Restaurant
    changeAddress(address:Address):void  //void 타입이없다 return 하면 boolean등으로 달라짐
}

export const Store:React.FC<OwnProps> = ({info}) => {
  return (
    <div>{info.name}</div>
  )
}

