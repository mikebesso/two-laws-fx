import React from "react";
import AppStore from "../../redux/AppStore";
import Firebase from "../../firebase";
import HashRouter from "../../hashRouter";
import * as Bloomer from "bloomer";

import SignInWithEmail from "../User/SignInWithEmail";


class Page extends React.Component {

  static PageKey = "signIn";
  static Location = () => ({name: Page.PageKey, options: {}});
  static Href = (id) => HashRouter.BuildHREF(Page.PageKey, {});
  static Route = `/${Page.PageKey}`;
  static RequiresAuthentication = true;

  static Title = "Sign In";

    render = () => {
    
      
        return(
        (!this.props.firebase.authenticated )
        ?
          (
            <Bloomer.Container isFluid>

                <Bloomer.Columns>

                <Bloomer.Column>
                  <Bloomer.Button
                    onClick={Firebase.SignInWithGoogle}
                  >
                    Sign In With Google
                  </Bloomer.Button>
              </Bloomer.Column>
              <Bloomer.Column hasTextAlign="centered">
                  <Bloomer.Title>
                  Or
                  </Bloomer.Title>
                </Bloomer.Column>
                <Bloomer.Column  >
                    <h1>SignIn</h1>
                    <SignInWithEmail />
                </Bloomer.Column>
              </Bloomer.Columns>
          </Bloomer.Container>
        )
      :
        (
            <Bloomer.Container isFluid>
            <Bloomer.Columns>
            <Bloomer.Column >
              Please come back soon.
            </Bloomer.Column>
              <Bloomer.Column >
                <div> Sign out button</div>
              </Bloomer.Column>
            </Bloomer.Columns>
          </Bloomer.Container>
            
        )
    )        
        
    
    }
}



const mapStateToProps = (state) => (
    {
        firebase: state.firebase
    } 
  );
  
  
  
  export default AppStore.ConnectPage(Page, mapStateToProps);
