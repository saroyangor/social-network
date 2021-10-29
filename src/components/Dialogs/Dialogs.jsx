import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const messageText = React.createRef()

    const addMessage = () => {
        const message = messageText.current.value
        alert(message)
        messageText.current.value = ""
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {props.dialogsState.dialogData.map(data => <DialogItem key={data.id} id={data.id} name={data.name}/>)}
            </div>
            <div className={classes.messages}>
                {props.dialogsState.messages.map(message => <Message key={message.id} message={message.message} />)}
                <textarea ref={messageText}/>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    );
};

export default Dialogs;