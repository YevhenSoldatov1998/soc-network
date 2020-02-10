import React, {useEffect} from 'react'
import s from './FromMessage.module.sass'
import Dialog from "./dialog/Dialog";

const Dialogs = ({dialogs, getDialogs}) => {
    useEffect(() => {
        getDialogs()
    }, []);

    return(
            <div className={s.fromMessages}>
                <Dialog dialogs= {dialogs} />
            </div>
    )
}
export default Dialogs
