import React, {  useState } from 'react'
import Paginador from '../../components/Paginador'
import ProductoCard from '../../components/ProductoCard';
import useFetch from '../../hooks/useFetch'
import config from '../../config/config';
import { ProductGrid } from './Main.styles';
import {SolarSystemLoading as Loader} from "react-loadingg";


export default  function Main() {


  
   const [currentPage, setCurrentPage] = useState(0);

   const { state } =  useFetch(`http://${config.BACKEND_URL}/productos?page=${currentPage}&size=6`, false);

   function next() {
      setCurrentPage(currentPage + 1);
   }

   function prev() {
      setCurrentPage(currentPage - 1);
   }


   function goPage(page) {
      setCurrentPage(page);
   }



   return (
      <>

         <Paginador config={
            {
               nextPage: next,
               previusPage: prev,
               goToPage: goPage,
               maxSize:5,
               metadata:{
                  page:currentPage,
                  totalPages:state.data.totalPages,
                  totalElements:state.data.totalElements
               }
            }}>

         <ProductGrid>
            {state.status!=="fetching"&&state.data.content?state.data.content.map(
               i=>(
               <ProductoCard key={i.id} producto={i}/>
               )):null}
            {state.status==="fetching"?(<Loader></Loader>):null}

         </ProductGrid>
            
         </Paginador>
      </>
   )
}
