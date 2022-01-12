import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field, reset } from "redux-form";
import { InputPhoto, Textarea } from '../../Common/FormsControls/FormsControls';

const validate = values => {
    const errors = {};

    if (!values.newPostText && !values.photo)
        errors.newPostText = "This field is empty";
    if (values.newPostText && values.newPostText.length > 300)
        errors.newPostText = "Must be 300 characters or less";
    
    return errors;
}

const MyPosts = (props) => {
    let postsElements = [...props.posts].reverse().filter(p => p.postOnIdProfile === props.profileId).map(p => (
        <Post message={p.message} quantityLikes={p.likesCount} key={p.id} photoURL={p.photoURL} 
            userId={p.userId} userLogin={p.userLogin} userPhoto={p.userPhoto} postId={p.id} 
            addLike={props.addLike} isMyLike={p.isMyLike} deletePost={props.deletePost}/>));

    let addNewPost = (values, dispatch) => {
        let text = values.newPostText;
        let photo = values.photo && URL.createObjectURL(values.photo);
        document.getElementById("loadingPhoto").style.backgroundColor = "";
        dispatch(reset("ProfileNewPostReduxForm"));
        props.addPost(props.profileId, props.auth.userId, props.auth.login, props.auth.photoUser, text, photo);
    }
    return (
        <div className={classes.postsBlock}>
            <div className={props.profilePosts.length === 0 ? classes.isNotPosts : classes.addPostField}>
                <h3>Add post</h3>
                <AddPostReduxForm onSubmit={addNewPost} />
            </div>
            <div className={props.profilePosts.length === 0 ? classes.notPostsField : classes.postsField}>
                <h2>Posts</h2>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.inputsField}>
                <Field component={Textarea} name="newPostText" placeholder="Input text" />
                <Field name="photo" type="file" component={InputPhoto} />
            </div>
            <div className={classes.submitButton}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'ProfileNewPostReduxForm',
    validate
})(AddPost)

export default MyPosts;