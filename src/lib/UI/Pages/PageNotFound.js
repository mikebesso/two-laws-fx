import React from "react";
import AppStore from "../../redux/AppStore";
import HashRouter from "../../hashRouter";



class Page extends React.Component {

    static PageKey = "notFound";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = true;
  
    static Title = "Not Found";    

    render = () => {
        
        return(
            <div>Not Found</div>
        )
    }

}






export default AppStore.ConnectPage(Page, mapStateToProps);

