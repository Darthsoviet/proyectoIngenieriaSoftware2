import styled from "styled-components"



const FormBox=styled("div")`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;





`

const Form=styled("form")`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;

*{
   color: ${({theme})=>theme.ligthColor};
   margin: 0.3em 0;
}

input,textarea{
   width: 80%;
   color: black;
   margin: 0.3em 0;
}
button{

   outline: none ;
   background: ${({theme})=>theme.secondaryBackground};

   margin: 1rem;
   padding: 2%;
   width: 70%;
}



`

export {FormBox,Form}