import { sendMessageActionCreator, updateNewMessageText } from '../../Redux/Message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect';



let mapStateToProps=(state)=>{
    return{
        messagesPage: state.messagesPage,
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

let authRedirect=withAuthRedirect(Dialogs);
const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(authRedirect);


export default DialogsContainer;
