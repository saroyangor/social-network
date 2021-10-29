import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

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
        <BrowserRouter>
            <div className={cl.appWrapper}>
                <Header/>
                <Nav/>
                <div className={cl.main}>
                    <Route path="/dialogs" render={() => <Dialogs dialogsState={props.state.dialogsPage}/>}/>
                    <Route path="/profile" render={() => <Profile profileState={props.state.profilePage}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
