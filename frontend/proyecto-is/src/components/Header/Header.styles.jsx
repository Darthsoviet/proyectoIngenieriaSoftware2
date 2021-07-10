import styled from "styled-components"


export const HeaderBlock=styled("header")`

width: 100%;
height: 8vh;
background-color: ${({theme})=>theme.primary};
text-align: center;
color: white;
display: flex;


`

export const HeaderTitle=styled("h1")`

width: 100%;

color: white;

`

export const HeaderThemeButton =styled("button")`

   border: none;
   height: 100%;
   background-color: transparent;

   font-size: x-large;
   text-align: center;

`