import React from 'react'
import {maxLength, minLength, required} from "../../../utility/validation";
import {withFormControl} from "../../../hoc/formControl";
import {createField} from "../../common/form/createField";

const maxLength20 = maxLength(20);
const minLength3 = minLength(3);
const Input = withFormControl('input');

const LoginForm = ({error, captchURL,handleSubmit, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>{error && <span>{error}</span>}</div>

            {createField("email", "Email", Input, [required, minLength3 ])}
            {createField("password", "Password", Input, [required, minLength3], "password")}
            {createField("rememberMe", "", Input, [], "checkbox", "Remember me")}

            {captchURL &&
            <div>
                <img src={captchURL} alt=""/>
                {createField("captcha", "Enter code", Input, [], )}

            </div>}
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
export default LoginForm
