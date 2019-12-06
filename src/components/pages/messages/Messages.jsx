import React from 'react'
import s from './Message.module.sass'
const Messages = () => {
    return(
        <div className={s.wrapMessage}>
            <div className="fromMessage">
                <div>Anastasia</div>
                <div>Yevhen</div>
                <div>Alex</div>
                <div>Amigo</div>
            </div>
            <div className="messages">
                <article className="message">
                    <div className="yourself">
                        Hello!!
                    </div>
                    <div className="person">Hello how are you)</div>
                </article>
            </div>
        </div>
    )
}
export default Messages