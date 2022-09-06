const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SET_PROFILE="SET_PROFILE";

let initialState={
    postsData: [
        {id:1, message: 'Hi', likesCount: 12},
        {id:2,message: 'How is your it-kamasutra', likesCount:23},
      ],
    profile: null,
    newPostText: 'it-kamasutra.com'
}

const profileReducer=(state=initialState, action)=>{
    switch(action.type) {
        case ADD_POST: {
            let newPost={
                id: 5,
                message: state.newPostText,
                likesCount:0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
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
        default:
            return state;
    }
}

export let addPostActionCreator=()=>({
    type: ADD_POST
})

export let updateNewPostTextActionCreator=(text)=>({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export let setProfile=(profile)=>({
    type: SET_PROFILE,
    profile
})


export default profileReducer;