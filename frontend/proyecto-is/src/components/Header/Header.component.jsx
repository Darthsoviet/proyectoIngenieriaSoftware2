import React from 'react'
import {HeaderBlock, HeaderTitle,HeaderThemeButton} from "./Header.styles"

export default function Header({ children,themeOptions }) {
   return (
      <HeaderBlock
      >

         <HeaderTitle>
            {children}

       


         </HeaderTitle>
         <HeaderThemeButton onClick={themeOptions.changeTheme}>

            {themeOptions.isLigth?"🌞":"🌙"}
         </HeaderThemeButton>

      </HeaderBlock>
   )
}
