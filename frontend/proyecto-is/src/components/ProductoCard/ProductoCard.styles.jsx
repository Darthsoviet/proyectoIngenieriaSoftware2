import styled from "styled-components";

const CardBody=styled("article")`


display: flex;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 250px;
height: 100%;
max-height: 300px;
background-color: ${({theme})=>theme.secondaryBackground};
color: ${({theme})=>theme.secondaryColor};

.card_title_PC{
   margin: 1rem;
}
`
export {CardBody}