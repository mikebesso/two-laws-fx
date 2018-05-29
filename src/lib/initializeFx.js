
import AppStore from './redux';
import HashRouter from "./hashRouter/HashRouter";
import Firebase from "./firebase";
import UI from "./UI";
import _ from "lodash";

const handleHashChange = () => {
    console.log("ROUTE CHANGE");
    
    AppStore.Dispatch(HashRouter.Actions.handleHashChange())
}

const initializeFx = (actions = {}, reducers = {}, firebaseConfig) => {

    const {Pages} = UI;
    const routes = _.mapValues(Pages, (element) => element.pageRoute)

    new AppStore(actions, reducers);

    new HashRouter(routes);
    window.addEventListener('hashchange', handleHashChange, false);
    
    // Set the initial route and render the app
    AppStore.Dispatch(HashRouter.Actions.handleHashChange())

    if (firebaseConfig){
        new Firebase(firebaseConfig);
    }

    return(true);

}  


export default initializeFx;