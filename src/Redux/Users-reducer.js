import { UserAPI } from "../components/API/api";
import { updateObjectInArray } from "./object-helpers";
const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_PAGE='SET_PAGE';
const SET_TOTAL_COUNT='SET_TOTAL_COUNT';
const TOGGLE_FETCHING='TOGGLE_FETCHING';
const TOGGLE_BUTTON='TOGGLE_BUTTON';


let initialState={
     users: [],
     totalUsersCount: 0,
     pageSize: 10,
     currentPage: 1,
     isFetching: false,
     toggleFollowingInProgress: []
}

const usersReducer=(state=initialState, action)=>{
    switch(action.type) {
        case FOLLOW:
            return{
                ...state,
                 users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
            }
        case UNFOLLOW:
            return{
                ...state,
                 users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )
            }
        case SET_USERS:{
            return {...state, users: action.users} 
        }
        case SET_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalcount}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_BUTTON: {
            return {...state, toggleFollowingInProgress: action.isFetching?[...state.toggleFollowingInProgress, action.userId]: [...state.toggleFollowingInProgress].filter(id=>id!=action.userId) }
        }
         default: {
            return state;
        }  
    }
}

export const follow=(userId)=>({
    type: FOLLOW,
    userId
})

export const unfollow=(userId)=>({
    type: UNFOLLOW,
    userId
})
export const setUsers=(users)=>({
    type: SET_USERS,
    users
})

export const setPage=(currentPage)=>({
    type: SET_PAGE,
    currentPage
})

export const setUsersTotalCount=(totalcount)=>({
    type: SET_TOTAL_COUNT,
    totalcount
})
export const toggleisFetching=(isFetching)=>({
    type: TOGGLE_FETCHING,
    isFetching
})

export const toggleFollowingButton=(isFetching, userId)=>({
    type: TOGGLE_BUTTON,
    isFetching,
    userId
})

export const getUsersThunk=(currentPage, pageSize)=>{
    return async (dispatch)=>{
        dispatch(toggleisFetching(true));
        let response=await UserAPI.getUsers(currentPage, pageSize)
            dispatch(toggleisFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setUsersTotalCount(response.totalCount));
            dispatch(setPage(currentPage));
    }
}

let followUnfollowFlow=async (dispatch, id, apiMethod, actionCreator)=>{
    dispatch(toggleFollowingButton(true, id));
    let response=await apiMethod(id);
    if(response.resultCode===0) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleFollowingButton(false, id));
}

export const followThunk=(id)=>{
    return async (dispatch)=>{
       followUnfollowFlow(dispatch, id, UserAPI.follow.bind(UserAPI), follow)
        
    }
}

export const unfollowThunk=(id)=>{
    return async (dispatch)=>{
            followUnfollowFlow(dispatch, id, UserAPI.unfollow.bind(UserAPI), unfollow)
        }
    }



export default usersReducer;