import styled from "styled-components"


const AsideMenu=styled("aside")`

width: 18vw;
height: max-content;
background-color: ${({theme})=>theme.primaryDarkBackground};
display: block;
min-height: 100%;

`
const MenuBlock=styled("menu")`

display: flex;
flex-direction: column;
height: 100%;
min-height: 100%;
align-items: center;
align-self: center;


`

export {AsideMenu,MenuBlock}