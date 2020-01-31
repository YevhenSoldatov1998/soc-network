import {Field} from "redux-form";
import React from "react";

export const createField = (name, placeholder, component, validations, type="text" , text = "") => {
    return (
        <div>

            <Field name={name}
                   placeholder={placeholder}
                   component={component}
                   validate={validations}
                   type={type}
            />
            {text}
        </div>
    )
}
