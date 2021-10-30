import React from "react";
import {Route} from "react-router-dom";

import cl from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <div className={cl.appWrapper}>
            <Header/>
            <Nav/>
            <div className={cl.main}>
                <Route path="/dialogs" render={() =>
                    <Dialogs
                        dialogsState={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />}/>
                <Route
                    path="/profile"
                    render={() =>
                        <Profile
                            profileState={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
