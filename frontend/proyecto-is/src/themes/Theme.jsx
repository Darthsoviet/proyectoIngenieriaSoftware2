import React from 'react';
import {useContextReducer} from "../providers/Session.provider"
import {theme as light} from "./lightTheme";
import {theme as dark} from "./darkTheme";

import {ThemeProvider} from "styled-components";

const Theme = ({children}) => {


   const{state}=useContextReducer();


   function selectTheme({theme}){
      if(theme==="DARK"){
         return light
      }else{
         return dark
      }



   }


   return (
      <ThemeProvider theme={selectTheme(state)}>

         {children}
      </ThemeProvider>
   );
}

export default Theme;
