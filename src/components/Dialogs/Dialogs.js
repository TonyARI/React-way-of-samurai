import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { Formik } from 'formik';


function Dialogs(props) {

    let state=props.messagesPage;

    let dialogsElements=state.dialogs.map((dialog)=>{
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    })
   
    let messagesElements=state.messages.map((item)=>{
        return <Message key={item.id} message={item.message}/>
    })

    let sendMessage=(message)=>{
        props.sendMessage(message);
    }
    
    let MessageForm=()=>{
        return (
            <div className={s.messages}>
                <Formik
                    initialValues={{
                        value: ""
                    }}
                    onSubmit={(values)=>sendMessage(values.value)}
                >
                    {({values, handleChange, handleSubmit })=>{
                        return <div>
                                    <textarea
                                         onChange={handleChange}
                                         name="value" 
                                         cols="30"
                                         rows="3"
                                         placeholder="Input your message"
                                         value={values.value}
                                         className={s.input_message}/><br/>
                                    <button 
                                        onClick={handleSubmit}
                                        disabled={!values.value}
                                        type="submit"
                                        className={!values.value?"btn disabled": "btn"}
                                        >Send</button>
                               </div>
                    }}
                </Formik>
            </div>
        )
    }
    return(
        <div className={s.dialogs+" section"}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <MessageForm/>
                {messagesElements}
            </div> 
        </div>
    )
}
export default Dialogs;