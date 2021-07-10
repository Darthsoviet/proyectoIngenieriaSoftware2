import React from 'react'
import {AsideMenu,MenuBlock} from "./Menu.styles";

export default function Menu({children}) {
   return (
      <AsideMenu>
            <MenuBlock>
               {children}
            </MenuBlock>
      </AsideMenu>
         
   )
}
