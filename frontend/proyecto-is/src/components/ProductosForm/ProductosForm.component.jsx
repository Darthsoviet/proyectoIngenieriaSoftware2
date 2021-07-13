import React, { useRef, useState } from 'react'
import { useContextReducer } from '../../providers/Session.provider';
import { actions } from '../../reducers/SessionReducer';

import { FormBox, Form } from "./ProductosForm.styles"

export default function ProductosForm() {

   const{dispatch,state}=useContextReducer();
   const [producto,setProducto]=useState({})
   const ref = useRef(null);

   function handleOnChange({target:{name},target:{value}}){
      setProducto({...producto,[name]:value});

   }
   async function  handleSubmit(event){
      event.preventDefault();



      await fetch(`productos`,{method:"POST", body: JSON.stringify(producto),headers:{"Content-Type":"application/json"}})
      dispatch({type:actions.SET_LOADING,payload:true})
      const response=await (await fetch(`productos?size=6&page=${state.dataProductosPage}`)).json();
      dispatch({type:actions.SET_DATA_PRODUCTOS,payload:response})
      dispatch({type:actions.SET_LOADING,payload:false})



      
      setProducto({});
      ref.current.reset();
   }

   return (

      <FormBox>

         <Form onSubmit={handleSubmit} ref={ref}>

            <label htmlFor="nombre">Nombre</label>
            <input required onChange={handleOnChange} name="nombre" type="text" />

            <label htmlFor="cantidad">Cantidad</label>
            <input required onChange={handleOnChange} name="cantidad" type="number" min="0" step="1" />
            <label htmlFor="precio">Precio</label>


            <input required onChange={handleOnChange} name="precio" type="number" min="0" />
            <label htmlFor="descripcion">Descripcion</label>
            <textarea onChange={handleOnChange} name="descripcion">

            </textarea>
            <button type="submit">Enviar</button>







         </Form>
      </FormBox>

   )

}
