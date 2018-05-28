import React from "react";
import AppStore, {reducerLogger} from './redux';


import { isUndefined } from "util";
import _ from "lodash";

import UI from "./UI";


import yup from "yup";

import HashRouter from "./hashRouter/HashRouter";

import Firebase from "./firebase";


yup.match = function (key, message, func) {
    message = message || 'Values do not match';
    func = func || function (value) {
      return value === this.options.context[key];
    }
  
    return yup.mixed().test('match', message, func);
  };



const handleHashChange = () => {
    console.log("ROUTE CHANGE");
    
    AppStore.Dispatch(fx.HashRouter.Actions.handleHashChange())
}

const initializeFx = (actions, reducers, firebaseConfig) => {

    const {Pages} = UI;
    const routes = _.mapValues(Pages, (element) => element.pageRoute)

    

    new fx.AppStore(actions, reducers);

    new fx.HashRouter(routes);
    window.addEventListener('hashchange', handleHashChange, false);
    
    // Set the initial route and render the app
    AppStore.Dispatch(fx.HashRouter.Actions.handleHashChange())

    new fx.Firebase(firebaseConfig);

}  

const fx = {
    react: React,
    //bindActionCreators,
    //connect,
    //connectFx,
    //Link,
    //withRouter,
    utils: {
        isUndefined
    },
    _,
    UI,
    //redux,
    AppStore,
    reducerLogger,
    yup,
    HashRouter,

    initializeFx,
    Firebase,

    actionTypes: {
        ...Firebase.actionTypes
    }
   

}




export default fx;