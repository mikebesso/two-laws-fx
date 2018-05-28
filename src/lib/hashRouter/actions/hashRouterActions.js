import actionTypes from "./actionTypes"
import Decoder from "../Decoder"

const handleHashChange = () => {
  
  var newURI = window.location.hash.substr(1);
  var location = Decoder.LookupURI(newURI);
  var canonicalURI = location.name && Decoder.MakeURI(location.name, location.options);

    if (!canonicalURI || canonicalURI === newURI) {
    return(
      {
        type: actionTypes.HANDLE_HASH_CHANGED, 
        payload: {location: location, transitioning: false}
      }
    )
  }
  else if (location.name) {
    return(navigateTo(location.name, location.options));
  }
  else {
    return(navigateTo("home", {}))
  }
}

const navigateTo = (name, options = {}) => {

    
  var currentURI = window.location.hash.substr(1);
  var newURI = Decoder.MakeURI(name, options);

  if (currentURI !== newURI) {

    const newLocation = window.location.pathname + window.location.search + '#' + newURI;
    window.location.replace(newLocation);

    return(
      {
          type: actionTypes.NAVIGATE_TO,
          payload: 
          {
            location: {name, options},
            transitioning: true
          }
        }
    );
   
  }
  else {
    return(
      {
          type: actionTypes.NAVIGATE_TO,
          payload: 
          {
            location: {name, options},
            transitioning: false
          }
        }
    );    
  }
}



const hashRouterActions = {
  handleHashChange: handleHashChange,
  navigateTo: navigateTo
}

export default hashRouterActions;