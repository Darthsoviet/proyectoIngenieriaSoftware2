import React from 'react'
import { CardBody } from './ProductoCard.styles'

export default function ProductoCard({ producto }) {

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


      </CardBody>
   )
}
