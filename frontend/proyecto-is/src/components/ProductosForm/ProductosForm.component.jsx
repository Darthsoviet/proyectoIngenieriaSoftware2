import React from 'react'

import { FormBox, Form } from "./ProductosForm.styles"

export default function ProductosForm() {


   return (

      <FormBox>

         <Form>

            <label htmlFor="nombre">Nombre</label>
            <input type="text" />

            <label htmlFor="cantidad">Cantidad</label>
            <input type="number" min="0" step="1" />
            <label htmlFor="precio">Precio</label>


            <input type="number" min="0" />
            <label htmlFor="descripcion">Descripcion</label>
            <textarea>

            </textarea>
            <button type="submit">Enviar</button>







         </Form>
      </FormBox>

   )

}
