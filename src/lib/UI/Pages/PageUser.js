
/*

import React from "react";
import AppStore from "../../redux/AppStore";








//import actions from "../../actions/index";
import userUI from "../UserUI";


class Page extends React.Component {


    static routes = {
        signIn: "/user/signin",
        signOut: "/user/signout",
        signUp: "/user/signup",
        forgot: "/user/forgot",
        account: "/user/account",
    }

    render(){

        const componentName = this.props.match.params.component.toLowerCase();


        switch (componentName){
            case "signin": return(<userUI.component.SignIn />);
            case "signup": return(<userUI.component.SignUp />);
            case "forgot": return(<userUI.component.Forgot />);
            case "account": return(<userUI.component.Account />);
            default: return(<userUI.component.SignUp />);
        }
    }
}




export default AppStore.ConnectPage(Page);

*/