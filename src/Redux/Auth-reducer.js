import { Auth } from "../components/API/api";
const AUTH_REDUCER="SAMURAI-NETWORK/AUTH_REDUCER";

let initialState={
    id: null,
    login: null,
    email: null,
    isAuth: false
}

let authReducer=(state=initialState, action)=>{
    switch(action.type) {
        case AUTH_REDUCER: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return  state;
        }
    }
}

export const authMe=(id, login, email, isAuth)=>({type:AUTH_REDUCER, data: {id, email, login, isAuth}});

export const authMeThunk=()=>async(dispatch)=>{
    let response=await Auth.me();
    if(response.resultCode===0) {
        let {id, login, email}=response.data
        dispatch(authMe(id, login, email, true));
    }
}
 
export const authMeHereThunk=(email, password, rememberMe, setStatus)=>async (dispatch)=>{
    let response=await Auth.authMe(email, password, rememberMe);
    if(response.resultCode===0) {
        dispatch(authMeThunk())
    }
    else {
        setStatus(response.messages)
    }
}

export const logoutMeThunk=()=>async (dispatch)=>{
    let response=await Auth.logout();
    if(response.resultCode===0) {
        dispatch(authMe(null, null, null, false))
    }
}

export default authReducer;
