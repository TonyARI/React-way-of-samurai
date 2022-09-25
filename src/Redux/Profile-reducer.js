import { Profile, UserAPI } from "../components/API/api";
const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SET_PROFILE="SET_PROFILE";
const SET_STATUS="SET_STATUS";

let initialState={
    postsData: [
        {id:1, message: 'Hi', likesCount: 12},
        {id:2,message: 'How is your it-kamasutra', likesCount:23},
      ],
    profile: null,
    status: ""
}

const profileReducer=(state=initialState, action)=>{
    switch(action.type) {
        case ADD_POST: {
            let newPost={
                id: 5,
                message: action.post,
                likesCount:0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
        
        }
        case SET_PROFILE:{
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
        default:
            return state;
    }
}

export let addPostActionCreator=(post)=>({
    type: ADD_POST,
    post
})

export let setProfile=(profile)=>({
    type: SET_PROFILE,
    profile
})

export let getProfileThunk=(id)=>{
    return (dispatch)=> {
        UserAPI.setProfile(id).then(data=>{
            dispatch(setProfile(data))
        })
    }
}

const setStatus=(status)=>({
    type: SET_STATUS,
    status
})



export let setStatusThunk=(id)=>{
    return(dispatch)=>{
        Profile.getStatus(id).then(data=>{
            dispatch(setStatus(data))
        })
    }
}

export let updateStatusThunk=(status)=>{
    return (dispatch)=>{
        Profile.setMyStatus(status).then(data=>{
            if(data.resultCode===0) {
                dispatch(setStatus(status));
            }
        })
    }
}


export default profileReducer;