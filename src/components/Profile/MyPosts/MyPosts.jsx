import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field, reset } from "redux-form";
import { required, maxLengthCreator } from '../../../Utils/Validators/Validator';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const MyPosts = (props) => {
    let postsElements = [...props.posts].reverse().map(p => (
        <Post message={p.message} quantityLikes={p.likesCount} key={p.id} />));
    let addNewPost = (values, dispatch) => {
        let text = values.newPostText;
        dispatch(reset("ProfileNewPostReduxForm"));
        props.addPost(text);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100);

const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" placeholder="Input text"
                    validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'ProfileNewPostReduxForm'
})(AddPost)

export default MyPosts;