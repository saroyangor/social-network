import React from "react";
import cl from "./App.module.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className={cl.appWrapper}>
      <Header/>
      <Nav/>
      <Profile/>
    </div>
  );
}

export default App;
