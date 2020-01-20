import React from 'react'
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import { signInThunk} from "../../../redux/reducerAuth";

const Login = (props) => {

    const handleSubmit = data => {

        props.signInThunk(data)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={handleSubmit}/>
        </div>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);
let mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, {signInThunk})(Login)
