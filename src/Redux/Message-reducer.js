const SEND_MESSAGE='send-Message'
const UPDATE_NEW_MESSAGE_TEXT='updateNewMessageText'

let initialState={
    messages:[
        {id:1, message: 'Hi'},
        {id:2,message: 'How is your it-kamasutra'},
        {id:3, message: 'yo'},
        {id:4,message: 'yo'},
        {id:5, message: 'you'},
      ],
    dialogs:[
        {id:1, name: 'Dima'},
        {id:2,name: 'Sveta'},
        {id:3, name: 'Roma'},
        {id:4,name: 'Kirill'},
        {id:5, name: 'Valera'},
        {id:6,name: 'Sasha'}
      ]    
}

const messageReducer=(state=initialState, action)=>{
    switch(action.type) {
        case SEND_MESSAGE:
            let body=action.message;
            return {
                ...state, 
                messages: [...state.messages, {id:6, message: body}]
            };
        default: return state;
    }
}

export let sendMessageActionCreator=(message)=>({
    type: SEND_MESSAGE,
    message
})

export default messageReducer;