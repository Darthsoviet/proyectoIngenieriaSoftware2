import styled from "styled-components"; 

const MainBox=styled("main")`

background-color: ${({theme})=>theme.primaryBackground};
max-height: 100%;
align-items: center;
justify-content: center;
display: flex;
max-width: 100%;
width: 100%;


`



export {MainBox}