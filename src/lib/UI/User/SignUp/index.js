import React from "react";
import AppStore from "../../../redux/AppStore";

//import { auth, db } from '../../../firebase';

import SignInWithEmail from "../SignInWithEmail";


const SignUpPage = () =>
  <div>
    <h1>SignUp</h1>
    <SignInWithEmail signup />
  </div>



const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <a href="/user/signup">Sign Up</a>
  </p>

export default SignUpPage;

export {
  SignUpLink,
};