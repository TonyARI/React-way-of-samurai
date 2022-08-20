
import { sendMessageActionCreator, updateNewMessageText } from '../../Redux/Message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStateToProps=(state)=>{
    return{
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        updateNewMessageText: (message)=>{
            dispatch(updateNewMessageText(message));
        },
        sendMessage: ()=>{
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;