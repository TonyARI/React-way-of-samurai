import { sendMessageActionCreator} from '../../Redux/Message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps=(state)=>{
    return{
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        sendMessage: (message)=>{
            dispatch(sendMessageActionCreator(message));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

/* let authRedirect=withAuthRedirect(Dialogs);
const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(authRedirect);


export default DialogsContainer; */
