import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../Utils/objectHelpers";

const FOLLOW_OR_UNFOLLOW = 'FOLLOW_OR_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProcess: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_OR_UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: action.boolValue})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleISFollowing = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFetching,
    userId
})
export const followOrUnfollowSuccess = (userID, boolValue) => ({
    type: FOLLOW_OR_UNFOLLOW,
    userID,
    boolValue
})

export const getUsers = (currentPage = 1, pageSize = 10) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}

export const followOrUnfollow = (userId, boolValue) => async (dispatch) => {
    dispatch(toggleISFollowing(true, userId));
    let response;
    if (boolValue === true)
        response = await usersAPI.getFollow(userId);
    else
        response = await usersAPI.getUnfollow(userId);
    if (response.resultCode === 0)
        dispatch(followOrUnfollowSuccess(userId, boolValue));
    dispatch(toggleISFollowing(false, userId));
}

export default usersReducer;