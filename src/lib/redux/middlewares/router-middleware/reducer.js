import actionTypes from "./action-types";
import reducerLogger from "../../reducerLogger";


const initialState = {
  location: null,
  action: null
};

/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state is discouraged.
 */
const routerReducer  = (state = initialState, action) => {

  switch(action.type){
    
    case actionTypes.LOCATION_CHANGE:

      if (action.payload) {
        return( { ...state, location: action.payload.location, action: action.payload.action });      
      } else {
        return(initialState);
      }
    
    default: 
      return(state);

    }

}


export default reducerLogger(routerReducer);