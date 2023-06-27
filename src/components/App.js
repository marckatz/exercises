import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import History from "./History";
import BeginWorkout from "./BeginWorkout";
import Exercises from "./Exercises";

function App(){
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/beginworkout">
                    <BeginWorkout />
                </Route>
                <Route path="/exercise">
                    <Exercises />
                </Route>
            </Switch>
        </div>
    )
}

export default App