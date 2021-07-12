import {actions} from "./sessionActions"


export function reducer(state,action){

   switch(action.type ){


      case actions.TOGGLE_THEME:

         return{
            ...state,
            theme: state.theme==="LIGTH"?"DARK":"LIGTH"
         }
      case actions.SET_DATA_PRODUCTOS:
         return {...state,   dataProductos:action.payload }
      case actions.SET_DATA_PRODUCTOS_PAGE:
         return {...state,   dataProductosPage:action.payload }
      case actions.SET_LOADING:
         return {...state,   loading:action.payload }

      default:
         return state



   }

}


