import styled  from "styled-components";



const ProductGrid=styled("ul")`
align-self: center;
width: 70vw;
height: 70vh;
display: grid;
justify-items: center;
padding: 0;
grid-template-columns: 1fr 1fr 1fr ;
gap: 20px;
grid-row: auto;
margin:  0 auto;

grid-auto-rows: 240px;

`

export {ProductGrid}