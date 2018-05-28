//import AppStore from "../redux";

import RouterSwitch from "./RouterSwitch"
import hashRouterReducers from "./reducers";
//import hashRouterActionTypes from "./actions/actionTypes"
//import hashRouterActions from "./actions/hashRouterActions"
import Decoder from "./Decoder";




export default class HashRouter {

  static decoder = null;

  constructor(routes, aliases){
    HashRouter.decoder = new Decoder(routes, aliases);
  }
  
  static LookupURI = (uri, method) => HashRouter.decoder.LookupURI(uri, method);
  LookupURI = HashRouter.LookupURI;

  static MakeURI = (name, options = {}) => HashRouter.decoder.MakeURI(name, options);  
  MakeURI = HashRouter.MakeURI;

  static BuildHREF = (name, options = {}) => HashRouter.decoder.BuildHREF(name, options); 
  BuildHREF = HashRouter.BuildHREF; 

  /*
  static Actions = hashRouterActions;
  Actions = hashRouterActions;
  */

  static Reducers = hashRouterReducers;
  Reducers = hashRouterReducers;

  static Switch = RouterSwitch;
  Switch = RouterSwitch;

  static NavigateTo = (name, options = {}) => {

    var currentURI = window.location.hash.substr(1);
    var newURI = Decoder.MakeURI(name, options);

    if (currentURI !== newURI) {

      const newLocation = window.location.pathname + window.location.search + '#' + newURI;
      window.location.replace(newLocation);
    }
  }
  NavigateTo = HashRouter.NavigateTo;

}