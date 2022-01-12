import React from 'react';
import { connect } from 'react-redux';
import { addLike, addPost, deletePost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state, props) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        auth: state.auth,
        profileId: props.profileId,
        profilePosts: props.profilePosts
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, addLike, deletePost})(MyPosts);

export default MyPostsContainer;