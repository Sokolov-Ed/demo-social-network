import { profileAPI, usersAPI } from "../api/api";
import { newProfilePhoto } from "./authReducer";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD-LIKE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let idPost = 0;

let initialState = {
    posts: [
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: ++idPost,
                postOnIdProfile: action.profileId,
                isMyLike: false,
                userId: action.userId,
                userLogin: action.userLogin,
                userPhoto: action.userPhoto,
                message: action.text,
                photoURL: action.url,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case ADD_LIKE: {
            let postsCopy = {
                ...state,
                posts: state.posts.map(p => {
                    if(p.id === action.postId) {
                        return Object.assign({}, p, !p.isMyLike ? { likesCount: p.likesCount+1, isMyLike: p.isMyLike=true} : { likesCount: p.likesCount-1, isMyLike: p.isMyLike=false})
                    }
                    return p
                })
            }
            return postsCopy;
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                posts: state.posts.filter(i => i.userPhoto = action.photos.small),
                profile: { ...state.profile, photos: action.photos }
            }
        }
        default:
            return state;
    }
}

export const addPost = (profileId, userId, userLogin, userPhoto, text = "", url = "") => ({
    type: ADD_POST,
    profileId,
    userId,
    userLogin,
    userPhoto,
    text,
    url
})
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})
export const addLike = (postId) => ({
    type: ADD_LIKE,
    postId
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const user = (userId) => async (dispatch) => {
    let response = await usersAPI.getUser(userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.saveMyPhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
        dispatch(newProfilePhoto(response.data.data.photos.small));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(user(userId));
    }
    else {
        dispatch(stopSubmit("editProfile", { _error: response.data.messages[0] }));
        return Promise.reject();
    }
}

export default profileReducer;