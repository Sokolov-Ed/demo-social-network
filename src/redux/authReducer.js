import { stopSubmit, reset } from "redux-form";
import { authMe, usersAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const UPDATE_PROFILE_PHOTO = 'UPDATE_PROFILE_PHOTO';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    photoUser: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case UPDATE_PROFILE_PHOTO:
            return {
                ...state,
                photoUser: action.photo
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, photoUser = null, isAuth, captchaUrl = null) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, photoUser, isAuth, captchaUrl }
})
export const updateProfilePhoto = (photo) => ({
    type: UPDATE_PROFILE_PHOTO,
    photo
})
export const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
})

export const newProfilePhoto = (photo) => async (dispatch) => {
    dispatch(updateProfilePhoto(photo));
}

export const authUserData = () => async (dispatch) => {
    let response = await usersAPI.getAuthMe();
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, null, true));
        response = await usersAPI.getUser(id);
        let photo = response.photos.large;
        dispatch(setAuthUserData(id, email, login, photo, true));
    }
}

export const login = (email, password, rememberMe, captcha, formName) => async (dispatch) => {
    let response = await authMe.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(authUserData());
        dispatch(reset(formName));
    }
    else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}

export const logout = () => async (dispatch) => {
    let response = await authMe.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, null, false));
    }
}

export default authReducer;