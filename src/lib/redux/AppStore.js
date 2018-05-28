
// Import the framework
import React from 'react';
// redux
import * as redux from 'redux';

import { Provider, connect } from 'react-redux';

// middlewares
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import externalInterfaceMiddleware from './middlewares/axios';

//import axios from 'redux-axios/lib/middleware';
import { logger } from 'redux-logger';

//import reducers from "../reducers"

import hashRouterReducers from "../hashRouter/reducers";

//import _ from "lodash";
import hashRouterActions from '../hashRouter/actions/hashRouterActions';

import firebaseReducers from "../firebase/reducers";

class AppStoreException {
    constructor(message) {
        this.message = message;
        this.name = "AppStoreException";
    }
}

class AppStore {

    static store = null;

    static reducers = null;
    static actions = null;

 
    constructor(actions, reducers){

        if (AppStore.store !== null){
            throw new AppStoreException("There can be only one AppStore");
        }
        
        AppStore.actions = {
            ...actions,
            ...hashRouterActions
        };
        AppStore.reducers = redux.combineReducers(
            {
                ...reducers,
                ...hashRouterReducers,
                ...firebaseReducers
            }
        );

        AppStore.store = AppStore.createStore(AppStore.reducers);





    }

    static createStore = (reducers) => {

       
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;


        const store = redux.createStore(
            reducers, 
            /* preloadedState, */ 
            composeEnhancers(
                redux.applyMiddleware(
                    logger,  
                    ReduxPromise, 
                    thunk,
                    externalInterfaceMiddleware
                )
            )
        );

        return(store);

    
    }    

    static GetState = () => AppStore.store.getState();

    static Dispatch = (action) => AppStore.store.dispatch(action);

   
    static Provider = (props) => {
        return(
            <Provider store={AppStore.store}>
                {props.children}
            </Provider>
        )

    }

    Provider = (props) => {
        return(AppStore.Provider(props));
    }

    

    static Connect = (mapStateToProps) => {


        return(
            (Component) => {
                return(    
                    connect(
                        mapStateToProps,
                        (dispatch) => redux.bindActionCreators({...AppStore.actions}, dispatch) 
                    )(Component)
                )
            }
        ) 

    }

}


       


/*
export function connectToStore(mapStateToProps, actions){

    return(
        (component) => {
            withRouter(
                connect(
                    mapStateToProps,
                    (dispatch) => {
                        return(
                            redux.bindActionCreators(
                                {
                                    ...actions
                                },
                                dispatch
                            )
                        )
                    }
                )
            )
        }
    )
}    
*/


export default AppStore;
