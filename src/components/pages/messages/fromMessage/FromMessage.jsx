import React from 'react'
import s from './FromMessage.module.sass'
import FromMessagePerson from "./FromMessagePerson/FromMessagePerson";

const FromMessage = (props) => {
    return(
            <div className={s.fromMessages}>
                <FromMessagePerson fromMessage= {props.fromMessage} />
            </div>
    )
}
export default FromMessage