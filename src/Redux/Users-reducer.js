import { UserAPI } from "../components/API/api";
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
                 users: state.users.map( u=>{
                    if(u.id===action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                 })
            }
        case UNFOLLOW:
            return{
                ...state,
                 users: state.users.map( u=>{
                    if(u.id===action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                 })
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
    return (dispatch)=>{
        dispatch(toggleisFetching(true));
        UserAPI.getUsers(currentPage, pageSize).then(data=>{
            dispatch(toggleisFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(setPage(currentPage));
        })
    }
}

export const followThunk=(id)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingButton(true, id));
        UserAPI.follow(id).then(data=>{
            if(data.resultCode===0) {
                dispatch(follow(id)) 
            }
            dispatch(toggleFollowingButton(false, id));
        })
    }
}

export const unfollowThunk=(id)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingButton(true, id));
        UserAPI.unfollow(id).then(data=>{
            if(data.resultCode===0) {
                dispatch(unfollow(id)) 
            }
            dispatch(toggleFollowingButton(false, id));
        })
    }
}


export default usersReducer;