import React from 'react'
import s from './FromMessage.module.sass'
import FromMessagePerson from "./FromMessagePerson/FromMessagePerson";
let person = [
    {name: "Anastasia",id:1},
    {name: "Yevhen",id:2},
    {name: "Alex",id:3},
    {name: "Amigo",id:4}
]
const FromMessage = () => {
    return(
            <div className={s.fromMessages}>
                <FromMessagePerson data = {person} />
            </div>
    )
}
export default FromMessage