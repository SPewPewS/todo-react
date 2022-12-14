import React, {useEffect, useMemo, useState} from "react";
import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <BrowserRouter>
            <Navbar />
            <AppRouter />

        </BrowserRouter>

        </AuthContext.Provider>
    )
}
export default App;
