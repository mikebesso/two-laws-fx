import React from "react";
import AppStore from "../../../redux/AppStore";


import { Formik } from "formik";



class SignInWithEmail extends React.Component{

    constructor(props){
        super(props);

        console.log("CONSTRUCTOR", props);
        
    }
    

    onSubmit = (values, signup) => {
        
        if (signup){
            this.props.signUpWithEmailAndPassword(values.email, values.password);
        }
        else {
            this.props.signInWithEmailAndPassword(values.email, values.password);
        }

    }
    renderInnerForm = (props) =>
    {
        const { values, errors, isSubmitting, handleChange, handleBlur, isInvalid, handleSubmit } = props;

        // haven't found a use for these yet, but I'm sure I will
        //const { touched, dirty } = props;
        

        return(
            <form onSubmit={handleSubmit}>
                <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    autoComplete="off"
                   />
                <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                   />
                {
                     this.props.signup
                    ?   <input
                            value={values.passwordConfirm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                            placeholder="Reenter Password"
                            name="passwordConfirm"
                            autoComplete="off"
                        />
                    :   null
                }        
                <button disabled={isInvalid || isSubmitting} type="submit">
                    {
                        this.props.signup
                        ? "Sign Up"
                        : "Sign In"
                    }
                </button>

                { errors && <div>{errors.email}</div> }
            </form>         
        ) 
    }



    render = (props) => {

        console.log("RENDER", props);

        return(
            <Formik 

                validationSchema = {
                    fx.yup.object().shape(
                        {
                            email: fx.yup.string().email().required("Email is required."),
                            password: fx.yup.string().required("Password is required"),
                            passwordConfirm: fx.yup.match('password', 'passwords do not match')
                        }
                    )
                }

                initialValues = {
                    {
                        email: "",
                        password: "",
                        passwordConfirm: ""
                    }
                }

                onSubmit={(values)=>this.onSubmit(values)}

                render={(props)=>this.renderInnerForm(props)} 

                signup 
                
            />
        )
    }
 } 


 const mapStateToProps = (state) => (
    {
        firebase: state.firebase

    } 
  );
  
  

export default AppStore.Connect(mapStateToProps)(SignInWithEmail);