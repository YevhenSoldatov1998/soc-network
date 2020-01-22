import React from 'react'
import {Field} from "redux-form";
import {maxLength, minLength, required} from "../../../utility/validation";

const maxLength20 = maxLength(20);
const minLength3 = minLength(3);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input"
                       validate={[required, maxLength20, minLength3]}
                       name="email"
                       placeholder={`Email`}/>
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
