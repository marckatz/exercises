import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import History from "./History";
import Favorites from "./Favorites";
import Browse from "./Browse";

function App(){
    return (
        <div>
            <h1></h1>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route path="/browse">
                    <Browse />
                </Route>
            </Switch>
        </div>
    )
}

export default App