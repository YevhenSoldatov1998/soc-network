import React from 'react'

const Contacts = ({contacts}) => {
    let arr = Object.keys(contacts);
    return (
        <div>
            {arr.map((el, index) => {
                if(contacts[el]){
                    return <p key={index}>{`${el} : ${contacts[el]}`}</p>
                }


            })}
        </div>
    )
}
export default Contacts
