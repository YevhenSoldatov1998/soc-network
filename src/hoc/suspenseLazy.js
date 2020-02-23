import React, {Suspense} from 'react'
export const suspenseLazy = (Component) => {
    debugger
     const WrapComponent = (props) => <div>
        <Suspense fallback={<div>Loading...</div>}>

            <Component {...props} />
        </Suspense>
    </div>
    return WrapComponent
}
