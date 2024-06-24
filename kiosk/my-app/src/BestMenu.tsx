import React from 'react'
import { Menu } from './model/resturant'

interface OwnProps extends Omit<Menu, 'category'> {
  showBestMenuName(name:string):string
}
//type으로 extends쓸경우
// type OwnProps = Menu & {
//   showBestMenuName(name:string):string
// }

export const BestMenu:React.FC<OwnProps> = ({name,price,showBestMenuName}) => {
  return (
    <div>
      {name}
      {price}

    </div>
  )
}
