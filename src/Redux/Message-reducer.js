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
    newMessage: '',
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
            let body=state.newMessage;
            return {
                ...state, 
                newMessage: '',
                messages: [...state.messages, {id:6, message: body}]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessageInputed 
            };

        default: return state;
    }
}

export let sendMessageActionCreator=()=>({
    type: SEND_MESSAGE
})
export let updateNewMessageText=(message)=>({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageInputed: message
})

export default messageReducer;