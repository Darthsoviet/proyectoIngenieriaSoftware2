import React, { useState } from 'react'
import Header from "../components/Header"
import Menu from "../components/Menu"

import { useContextReducer } from "../providers/Session.provider"
import { actions } from "../reducers/SessionReducer/sessionActions";
import ProductosForm from "../components/ProductosForm";
import "./layout.scss"


export default function Layout({ children }) {

   const { state, dispatch } = useContextReducer();

   const [isLigth, setLigth] = useState(state.theme === "LIGHT");

   function changeTheme() {
      dispatch({ type: actions.TOGGLE_THEME });

      setLigth(!isLigth)

   }

   return (
      <div className="layout-container">
         <Header themeOptions={{ isLigth, changeTheme }}>
            Catalogo Productos
         </Header>
         <div className="wrapper-main">

            <Menu >
               <ProductosForm></ProductosForm>

            </Menu>
            <div>

               {children}
            </div>

         </div>


      </div>
   )
}
