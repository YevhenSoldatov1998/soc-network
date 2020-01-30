import React, {Component} from 'react'
import s from './MyPosts.module.sass'
import AddPost from "./addPost/AddPost";
import Posts from "./posts/posts";


class MyPosts extends Component {

    render() {

        return (
            <div className={`${s.myPosts} padding`}>
                <AddPost addPostItem={this.props.addPostItem}
                         handleValue={this.props.handleValue}
                         textareaValue={this.props.profile.textareaValue}
                />
                <Posts posts={this.props.profile.posts}/>
            </div>
        )
    }
}


export default MyPosts
