import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';



function MyPosts(props) {
   
    let postsElements=props.postsData.map((post)=>{
        return <Post message={post.message} likesCount={post.likesCount} />
    })
    let addPost=(post)=>{
        props.addPost(post);
       /*  props.dispatch(addPostActionCreator()); */
    }
    
    let PostForm=()=>{
        return (
            <div>
                <Formik
                    initialValues={{
                        value: "",
                    }}
                    onSubmit={(values)=>addPost(values.value)}
                >
                    {({values, handleChange, handleSubmit, resetForm})=>{
                        return  <>
                                    <div>
                                        <textarea 
                                            onChange={handleChange}
                                            name="value"
                                            value={values.value}
                                            style={{width: "100%", height: "120px", outline: "none", border: "1px solid #2D3D49", resize: "none"}}
                                            />
                                    </div>
                                    <button disabled={!values.value} className={!values.value?"btn disabled":"btn"} type="submit" onClick={handleSubmit}>Add post</button>
                                    <button onClick={resetForm} className={s.remove_button}>remove</button>
                                </>
                    }}
                </Formik>
            </div>
        )
    }

    return (
        <div className="section">
            <h2>My post</h2>
            <PostForm/>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;