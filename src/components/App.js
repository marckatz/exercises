import React from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import History from "./History";
import Favorites from "./Favorites";
import Browse from "./Browse";
import {AnimatePresence} from 'framer-motion'

function App(){
    document.title = "FlexFit+"
    const location = useLocation()
    return (
        <div>
            <h1 className="main">ᕙFlexᕗFit+</h1>
            <NavBar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/browse" element={<Browse />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App