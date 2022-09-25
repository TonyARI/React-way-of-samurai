import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/Profile-reducer';
import MyPosts from './MyPosts';


let mapStateToProps=(state)=>{
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText, 
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        addPost: (post)=>{
            dispatch(addPostActionCreator(post))
        }
    }
}

const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;