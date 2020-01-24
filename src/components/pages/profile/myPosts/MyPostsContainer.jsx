import {connect} from "react-redux";
import {addPostItem} from "../../../../redux/reducerProfile";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPostItem})(MyPosts)
export default MyPostsContainer;
