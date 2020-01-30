import React from 'react'
import {addPostCreator, getValueTextCreator} from "../../../../../redux/profile-reducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {
    const handleValue = (e) => {
        props.dispatch(getValueTextCreator(e))
    }
    const addPostItem = () => {
        props.dispatch(addPostCreator())
    }
    return (
        <AddPost handleValue={handleValue} addPostItem={addPostItem}/>
    )

}

export default AddPostContainer
