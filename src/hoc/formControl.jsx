import React from 'react'
export const withFormControl = (Component) =>  {
    return ({input,   meta: { touched, error, warning }, ...props})=> {
        const hasError = error && touched;
        return (
            <div className={'formControl'}>
                <Component {...input} {...props} />
                <div>{hasError && <span>{error}</span>}</div>
            </div>
        );
    }

}
