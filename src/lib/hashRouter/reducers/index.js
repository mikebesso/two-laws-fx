import reducerLogger from "../../redux/reducerLogger";
import actionTypes from "../actions/actionTypes";

const hashRouterReducer = (state = {}, action) => {

  
      switch(action.type) {
    
        case actionTypes.HANDLE_HASH_CHANGED:
          return(action.payload);
          
        default:
          return({...state});
    
      }
    }

const hashRouterReducers = {
    hashRouter: reducerLogger(hashRouterReducer)
}

export default hashRouterReducers;