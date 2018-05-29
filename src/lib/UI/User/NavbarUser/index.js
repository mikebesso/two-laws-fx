import React from "react";
import Bloomer from "bloomer";
import AppStore from "../../../redux/AppStore";
import Pages from "../../Pages";

import * as Bloomer from "bloomer";


class NavbarUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle() {
      console.log("toggle", this.state.isOpen)
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {

    console.log(fx, fx.UI.Pages);

    if (this.props.firebase.authenticated) {
        return(
            <Bloomer.NavbarItem hasDropdown isHoverable>
                <Bloomer.NavbarLink href="#">{this.props.firebase.name}</Bloomer.NavbarLink>
                <Bloomer.NavbarDropdown>
                    <Bloomer.NavbarItem href={PageSignOut.Href()}>Sign out</Bloomer.NavbarItem>
                    <Bloomer.NavbarItem href="#">Profile</Bloomer.NavbarItem>
                </Bloomer.NavbarDropdown> 
            </Bloomer.NavbarItem>
        )

    } else {

        return(
            <Bloomer.NavbarItem hasDropdown isHoverable>
                <Bloomer.NavbarLink href={fx.UI.Pages.signIn.Href()}>Sign In</Bloomer.NavbarLink>
                <Bloomer.NavbarDropdown>
                    <Bloomer.NavbarItem href="#">Abount</Bloomer.NavbarItem>
                    <Bloomer.NavbarItem href="#">Contact</Bloomer.NavbarItem>
                </Bloomer.NavbarDropdown> 
            </Bloomer.NavbarItem>

        )

    }


 
  }
}




const mapStateToProps = (state) => (
  {
      firebase: state.firebase,
      hashRouter: state.hashRouter
  } 
);


  
export default AppStore.Connect(mapStateToProps)(NavbarUser);


