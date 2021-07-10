import {actions} from "./sessionActions"


export function reducer(state,action){

   switch(action.type ){


      case actions.TOGGLE_THEME:

         return{
            ...state,
            theme: state.theme==="LIGTH"?"DARK":"LIGTH"
         }
      default:
         return state



   }

}


