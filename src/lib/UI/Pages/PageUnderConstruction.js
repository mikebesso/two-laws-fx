import React from "react";
import AppStore from "../../redux/AppStore";
import HashRouter from "../../hashRouter";




class Page extends React.Component {

    static PageKey = "underConstruction";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => fx.HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = false;

    render = () => {
        
        return(
            <div>Under Construction</div>
        )
    }

}





export default AppStore.ConnectPage(Page);
