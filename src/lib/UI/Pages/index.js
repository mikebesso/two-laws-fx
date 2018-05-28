import _ from "lodash";


export let Pages = {};


export const AddPage = (pageClass, connectedPage) => {
    
    Pages[pageClass.PageKey] = {
        pageComponent: connectedPage, 
        pageClass,  
        pageRoute: `GET ${pageClass.Route}`, 
        pageRequiresAuth: pageClass.RequiresAuthentication,
        pageLocation: pageClass.Location

    };


}

/*
export const RouteMap = () => {

    const map = _.mapValues(PageList, (element) => element.pageComponent)
    return (map)
 };

export const Routes = () => {

    const map = _.mapValues(PageList, (element) => element.pageRoute)
    return (map) 

} 

export const PageClass = () => {
    const map = _.mapValues(PageList, (element) => element.pageClass)
    return (map) 
}

export const PageLocation = () => {
    const map = _.mapValues(PageList, (element) => element.pageLocation)
    return (map) 
}
*/



