import React from "react";
import AppStore from "../../../redux/AppStore";


const SignOutButton = () =>
  <button
    type="button"
    onClick={this.props.signOut}
  >
    Sign Out
  </button>

export default AppStore.Connect(SignOutButton);