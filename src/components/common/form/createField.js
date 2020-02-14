import {Field} from "redux-form";
import React from "react";

export const createField = (name, placeholder, component, validations, type="text" , text = "", value, caption='') => {
    return (
        <div>
            <strong>{caption}</strong>
            <Field name={name}
                   placeholder={placeholder}
                   component={component}
                   validate={validations}
                   type={type}
                   value = {value}
            />
            {text}
        </div>
    )
}
