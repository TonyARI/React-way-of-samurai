import { Auth } from "../components/API/api";
const AUTH_REDUCER="AUTH_REDUCER";

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
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return  state;
        }
    }
}

export const authMe=(id, login, email)=>({type:AUTH_REDUCER, data: {id, email, login} });

export const authMeThunk=()=>{
    return (dispatch)=>{
        Auth.me().then(data=>{
            if(data.resultCode===0) {
                dispatch(authMe(data.data.id, data.data.login, data.data.email));
            }
        })
    }
}
export default authReducer;
