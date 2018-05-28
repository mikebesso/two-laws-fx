import types from "../actions/types";
import reducerLogger from "../../redux/reducerLogger";


const initialState =
{
    authenticated: false,
    name: "anonymous",
    email: ""
}

const firebaseReducer = (state = initialState, action) => {


    switch (action.type) {
        
        case types.SIGN_OUT:
            return(initialState);

        case types.ON_AUTH_STATE_CHANGE:
        
            return ({...state, ...action.payload});
            
        default:
            return (state);
    }
    
}




const firebaseReducers = {
    firebase: reducerLogger(firebaseReducer)
}

export default firebaseReducers;