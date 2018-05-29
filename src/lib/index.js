import React from "react";
import AppStore, {reducerLogger} from './redux';


import { isUndefined } from "util";
import _ from "lodash";

import initializeFx from "./initializeFx";
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