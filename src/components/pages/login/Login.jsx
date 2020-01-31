import React from 'react'
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {signInThunk} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = ({isAuth, captchURL, ...props}) => {
    const handleSubmit = ({email, password, rememberMe, captcha = null}) => {
        props.signInThunk(email, password, rememberMe, captcha)
    };
    if (isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchURL={captchURL} onSubmit={handleSubmit}/>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let mapStateToProps = state => ({isAuth: state.auth.isAuth, captchURL: state.auth.captchURL});

export default connect(mapStateToProps, {signInThunk})(Login)
