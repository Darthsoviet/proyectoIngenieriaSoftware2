import React, { useEffect } from 'react'
import Paginador from '../../components/Paginador'
import ProductoCard from '../../components/ProductoCard';
import config from '../../config/config';
import { ProductGrid } from './Main.styles';
import { SolarSystemLoading as Loader } from "react-loadingg";
import { useContextReducer } from '../../providers/Session.provider';
import { actions } from '../../reducers/SessionReducer';

export default function Main() {





   const { state, dispatch } = useContextReducer();
   const url = `${config.BACKEND_URL}/productos?size=6&page=${state.dataProductosPage}`


   useEffect(() => {
      let cancelRequest = false;
      dispatch({ type: actions.SET_LOADING, payload: true })
      dispatch({ type: actions.SET_DATA_PRODUCTOS, payload: {} })
      const fetchData = async () => {



         try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: actions.SET_DATA_PRODUCTOS, payload: data });
            if (cancelRequest) return;
            dispatch({ type: actions.SET_LOADING, payload: false })

         } catch (error) {
            if (cancelRequest) return;

         }



      };

      fetchData();

      return function cleanup() {
         cancelRequest = true;
      };
   }, [url, dispatch, state.dataProductosCache]);

   function next() {
      dispatch({ type: actions.SET_DATA_PRODUCTOS_PAGE, payload: state.dataProductosPage + 1 })
   }

   function prev() {
      dispatch({ type: actions.SET_DATA_PRODUCTOS_PAGE, payload: state.dataProductosPage - 1 })

   }


   function goPage(page) {
      dispatch({ type: actions.SET_DATA_PRODUCTOS_PAGE, payload: page })
   }



   return (
      <>

         <Paginador config={
            {
               nextPage: next,
               previusPage: prev,
               goToPage: goPage,
               maxSize: 5,
               metadata: {
                  page: state.dataProductosPage,
                  totalPages: state.dataProductos.totalPages,
                  totalElements: state.dataProductos.totalElements
               }
            }}>

            <ProductGrid>
               {!state.loading && state.dataProductos.content ? state.dataProductos.content.map(
                  i => (
                     <ProductoCard key={i.id} producto={i} />
                  )) : null}
               {state.loading ? (<Loader></Loader>) : null}

            </ProductGrid>

         </Paginador>
      </>
   )
}
