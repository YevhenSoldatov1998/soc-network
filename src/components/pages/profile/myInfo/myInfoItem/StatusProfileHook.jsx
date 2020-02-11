import React, {useState} from 'react'

const StatusProfileHook = props => {

    let [isMode, setMode] = useState(true);
    let [status, setStatus] = useState(props.status);
    const editStatus = () => {
        setMode(false)
    };
    const deactivateEditStatus = () => {
        setMode(true)
        props.userStatusUpdate(status)
    };
    const statusChange = (e) => {
        setStatus(e.target.value)
    };
    return (
        <div>
            {isMode ?
                <div>
                    <strong onClick={editStatus}>{props.status || 'status is empty'}</strong>
                </div>
                :
                <div>
                    <input onBlur={deactivateEditStatus}
                           onChange={statusChange}
                           value={status}
                           autoFocus={true}
                           type="text"/>
                </div>
            }
            <br/>
        </div>
    )

}

export default StatusProfileHook
