import React from "react";
import AppStore from "../../redux/AppStore";
import HashRouter from "../../hashRouter";

class Page extends React.Component {

    static PageKey = "signUp";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = false;

    render = () => <div> signup here </div>
}



const mapStateToProps = (state) => (
    {
        firebase: state.firebase
    } 
  );
  

export default AppStore.ConnectPage(Page);
