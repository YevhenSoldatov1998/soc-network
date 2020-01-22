import React from 'react'
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import { signInThunk} from "../../../redux/reducerAuth";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const handleSubmit = ({email, password, rememberMe}) => {
        props.signInThunk(email, password, rememberMe)
    };
    if(props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={handleSubmit}/>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let mapStateToProps = state => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, {signInThunk})(Login)
