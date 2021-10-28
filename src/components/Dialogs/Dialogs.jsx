import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                <DialogItem name="Ani" id="1"/>
                <DialogItem name="Dina" id="2"/>
                <DialogItem name="Mash" id="3"/>
                <DialogItem name="Edith" id="4"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How r u?"/>
                <Message message="Any news?"/>
            </div>
        </div>
    );
};

export default Dialogs;