import React from 'react'
import { useContextReducer } from '../../providers/Session.provider';
import { actions } from '../../reducers/SessionReducer';
import { CardBody } from './ProductoCard.styles'

export default function ProductoCard({ producto }) {

   const {state,dispatch}=useContextReducer();

   async function handleOnclick(id){
      dispatch({type:actions.SET_LOADING,payload:true})

      await fetch(`productos/${id}`,{method:"DELETE"});
      const response=await (await fetch(`productos?size=6&page=${state.dataProductosPage}`)).json();
      dispatch({type:actions.SET_DATA_PRODUCTOS,payload:response})
      dispatch({type:actions.SET_LOADING,payload:false});

   }
   const { nombre, precio, cantidad, fechaCreacion, descripcion, id } = producto;
   return (
      <CardBody>
         <p className="card_title_PC">
            {nombre} #{id}
         </p>
         <p>{fechaCreacion}</p>
         <p>{descripcion}</p>
         <p>{cantidad}</p>
         <p>${precio}</p>
         <button onClick={()=>handleOnclick(id)} className="btn btn-danger">borrar</button>


      </CardBody>
   )
}
