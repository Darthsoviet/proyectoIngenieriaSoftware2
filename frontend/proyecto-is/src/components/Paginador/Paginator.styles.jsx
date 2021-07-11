import styled from "styled-components"




const PaginatorBody=styled("div")`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: fit-content;
align-content: center;
margin:  0;
width:auto;


`
const ControlsBlock=styled("div")`


display: flex;
height: fit-content;
margin:  0;
margin-top: 1rem;
width: 80%;
justify-content: center;

button{
   padding: 1rem;
   border: none;
   text-align: center;
   text-decoration: none;
   display: inline-block;
}

`
const ControlsList=styled("div")`

padding: 0;
margin: 0;
display: flex;
align-items: center;
justify-content: center;
height:fit-content;
width: 80%;

button{
   margin: 0 0.3rem;
   border-radius: 50%;
   
}
.current{
   border: 2px solid green;
   box-shadow: 2px 2px 2px  green;
}

`
export {ControlsBlock,ControlsList,PaginatorBody}