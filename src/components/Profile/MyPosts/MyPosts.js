import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/Profile-reducer';


function MyPosts(props) {
   
    let postsElements=props.postsData.map((post)=>{
        return <Post message={post.message} likesCount={post.likesCount} />
    })
    let newPostElement=React.createRef();
    let addPost=()=>{
        props.addPost();
       /*  props.dispatch(addPostActionCreator()); */
    }
    let onPostChanges=()=>{
        let text=newPostElement.current.value;
        props.onPostChange(text); 
    }

    return (
        <div className={classes.postsBlock}>
            My post
            <div>
                <div>
                    <textarea onChange={onPostChanges} name="" ref={newPostElement} cols="30" rows="10" value={props.newPostText}/>
                </div>
              <button onClick={addPost}>Add post</button>
              <button>remove</button>
            </div>
            <div className={classes.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;