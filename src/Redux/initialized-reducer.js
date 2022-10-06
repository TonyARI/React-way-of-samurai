import {authMeThunk} from "./Auth-reducer";
const INITIALIZED_SUCCES="INITIALIZED_SUCCES";


let initialState={
    isInitialize: false
}

let initilizedReducer=(state=initialState, action)=>{
    switch(action.type){
        case INITIALIZED_SUCCES: {
            return {
                ...state,
                isInitialize: true
            }
        }
        default:{
            return state;
        }
    }
}

let initialReducer=()=>({type:INITIALIZED_SUCCES})

export let initialSuccesThunk=()=>(dispatch)=>{
    let promise=dispatch(authMeThunk());
    Promise.all([promise]).then(()=>{
            dispatch(initialReducer())
        })
}

export default initilizedReducer;