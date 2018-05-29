import React from "react";
import AppStore from "../../redux/AppStore";
import Firebase from "../../firebase";
import HashRouter from "../../hashRouter";

import * as Bloomer from "bloomer";

class Page extends React.Component {

    static PageKey = "signOut";
    static Location = () => ({name: Page.PageKey, options: {}});
    static Href = (id) => HashRouter.BuildHREF(Page.PageKey, {});
    static Route = `/${Page.PageKey}`;
    static RequiresAuthentication = false;

    static Title = "Sign Out";

    SignOut = () => {
        Firebase.SignOut()
    }

    render = () => {
        return (
            <Bloomer.Button onClick={this.SignOut}>
                Sign Out
            </Bloomer.Button>
        )
    }
}






const mapStateToProps = (state) => (
    {
        firebase: state.firebase
    } 
  );
  
  
  /*
  const ConnectedPage = fx.AppStore.Connect(mapStateToProps)(Page);
  fx.UI.AddPage(Page, ConnectedPage);
  export default ConnectedPage;
  */

export default AppStore.ConnectPage(Page, mapStateToProps);
  
  
