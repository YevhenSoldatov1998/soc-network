import React from 'react'
import s from './Post.module.sass'

const Post = (props) => {
    return (
        <article className={s.post}>
            <div className={s.icon}>
                <img
                    src={props.post.src}
                    alt=""/>
            </div>
            <p className={s.text}>{props.post.text}</p>
        </article>


    )
}


export default Post