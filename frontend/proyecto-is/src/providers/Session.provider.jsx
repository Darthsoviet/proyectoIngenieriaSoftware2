import React, { useContext, useReducer } from 'react'

import {init,reducer} from "../reducers/SessionReducer/"



const context = React.createContext({

   state: {},
   dispatch: () => { }
})


export function useContextReducer() {
   return useContext(context);
}

export  function SessionProvider({ children }) {

  const [state,dispatch]= useReducer(reducer,init)



   return (
      <>
         <context.Provider value={{state,dispatch}} >
            {children}
         </context.Provider>
      </>
   )
}
