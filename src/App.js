import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";

const App = () => {
  window.addEventListener("popstate", (event) => {
    const showChat = document.querySelector(
      ".chat-main-section > div:first-child"
    );

    if (showChat.classList.contains("show")) {
      showChat.classList.remove("show");
      document.querySelector(".inbox .inbox-top").classList.remove("hide");
    }
  });
  return (
    <div className="app">
      <Header />
      <div className="app-sections">
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/accounts/inbox" component={Inbox} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
