import React from 'react'
import './popup.sass'
const Popup = (props) => {
    return(
        <div className="popup">
            <div className="popup-item">
               {props.children}
            </div>
        </div>
    )
}
export default Popup
