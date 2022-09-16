import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { sendMessageActionCreator, updateNewMessageText } from '../../Redux/Message-reducer';
import { Navigate } from 'react-router-dom';


function Dialogs(props) {

    let state=props.messagesPage;

    let dialogsElements=state.dialogs.map((dialog)=>{
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    })
   
    let messagesElements=state.messages.map((item)=>{
        return <Message key={item.id} message={item.message}/>
    })

    let newMessage=React.createRef();
    let sendMessage=()=>{
        props.sendMessage();
    }
    
    let onMessageChange=()=>{
        let message=newMessage.current.value;
        props.updateNewMessageText(message);
    }
    
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <textarea onChange={onMessageChange} name="" id="" cols="30" ref={newMessage} rows="3" placeholder="Input your message" value={state.newMessage}/><br/>
                <button onClick={sendMessage}>Send</button>
                {messagesElements}
            </div> 
        </div>
    )
}
export default Dialogs;