import React from 'react'
import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="email" placeholder={`Email`}/>
            </div>

            <div>
                <Field component="input" name="password" placeholder={`Password`}/>
            </div>

            <div>
                <Field component="input" name="rememberMe" type="checkbox" id={`checkbox`}/>
                <label htmlFor="checkbox">Remember me</label>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
export default LoginForm
