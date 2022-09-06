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
export default authReducer;
