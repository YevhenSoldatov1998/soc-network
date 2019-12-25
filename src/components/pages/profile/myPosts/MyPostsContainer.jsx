import {connect} from "react-redux";
import {addPostCreator, getValueTextCreator} from "../../../../redux/reducerProfile";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleValue: (text) => {
            dispatch(getValueTextCreator(text))
        },
        addPostItem: () => {
            dispatch(addPostCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;