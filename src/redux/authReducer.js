import { stopSubmit, reset } from "redux-form";
import { authMe, usersAPI } from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    photoUser: null,
    isAuth: false,
    isFetching: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, photoUser = null, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, photoUser, isAuth }
})

export const authUserData = () => async (dispatch) => {
    let response = await usersAPI.getAuthMe();
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, null, true));
        response = await usersAPI.getUser(id);
        let photo = response.photos.small;
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
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const logout = () => async (dispatch) => {
    let response = await authMe.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, null, false));
    }
}

export default authReducer;