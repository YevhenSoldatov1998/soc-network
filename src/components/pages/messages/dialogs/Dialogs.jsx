import React from 'react'
import s from './FromMessage.module.sass'
import Dialog from "./dialog/Dialog";

const Dialogs = ({dialogs}) => {
    return(
            <div className={s.fromMessages}>
                <Dialog dialogs= {dialogs} />
            </div>
    )
}
export default Dialogs
