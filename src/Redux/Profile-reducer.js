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

export const profileReducer=(state=initialState, action)=>{
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

const setStatus=(status)=>({
    type: SET_STATUS,
    status
})

export let getProfileThunk=(id)=>async (dispatch)=>{
    let response= await UserAPI.setProfile(id);
    dispatch(setProfile(response))
}

export let setStatusThunk=(id)=>async (dispatch)=>{
    let response= await Profile.getStatus(id);
    dispatch(setStatus(response));
}

export let updateStatusThunk=(status)=>async (dispatch)=>{
    let response=await Profile.setMyStatus(status);
    if(response.resultCode===0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;