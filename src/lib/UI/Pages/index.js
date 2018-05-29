import _ from "lodash";

import PageForgotPassword from "./PageForgotPassword";
import PageSignIn from "./PageSignIn";
import PageSignUp from "./PageSignUp";
import PageSignOut from "./PageSignOut";
import PageUser from "./PageUser";



import PageUnderConstruction from "./PageUnderConstruction";
import PageNotFound from "./PageNotFound";


export let Pages = {};


export const AddPage = (pageClass, connectedPage) => {
    
    Pages[pageClass.PageKey] = {
        pageComponent: connectedPage, 
        pageClass,  
        pageRoute: `GET ${pageClass.Route}`, 
        pageRequiresAuth: pageClass.RequiresAuthentication,
        pageLocation: pageClass.Location,
        Href: pageClass.Href
    };


}

