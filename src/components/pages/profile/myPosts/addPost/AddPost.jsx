import React from 'react'
import s from "../MyPosts.module.sass";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postValue: 'asdsad',
        }
    }

    handleValue(e) {
        let value = e.target.value;
        this.setState({
            postValue: value
        })
    }

    render() {
        return (
            <div className={s.addPost}>
                <textarea onChange={this.handleValue.bind(this)} placeholder="Add something on wall"></textarea>
                <button onClick={() => this.props.addPost(this.state.postValue)}>add post</button>
            </div>
        )
    }

}

export default AddPost