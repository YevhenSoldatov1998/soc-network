import React, {useEffect} from 'react'
import s from './FromMessage.module.sass'
import Dialog from "./dialog/Dialog";

const Dialogs = ({dialogs, getDialogs, getMessages, match}) => {
    useEffect(() => {
        getDialogs()
    }, []);

    return(
            <div className={s.fromMessages}>
                <Dialog dialogs= {dialogs}
                        getMessages={getMessages}
                        userId = {match.params.userId}
                />
            </div>
    )
}
export default Dialogs
