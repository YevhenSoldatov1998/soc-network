import React from 'react'
import {Field} from "redux-form";
import {maxLength, minLength, required} from "../../../utility/validation";
import {withFormControl} from "../../../hoc/formControl";

const maxLength20 = maxLength(20);
const minLength3 = minLength(3);
const Input = withFormControl('input');

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>{props.error && <span>{props.error}</span>}</div>
            <div>
                <Field component={Input}
                       validate={[required, minLength3]}
                       name="email"
                       placeholder={`Email`}/>
            </div>

            <div>
                <Field component={Input}
                       name="password"
                       placeholder={`Password`}
                       validate={[required, maxLength20, minLength3]}
                />
            </div>

            <div>
                <Field component={Input} name="rememberMe" type="checkbox" id={`checkbox`}/>
                <label htmlFor="checkbox">Remember me</label>
            </div>
            {props.captchURL &&
            <div>
                <img src={props.captchURL} alt=""/>
                <div>
                    <Field name="captcha"
                           component={Input}
                           placeholder={`Enter code`}
                    />
                </div>
            </div>}
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
export default LoginForm
