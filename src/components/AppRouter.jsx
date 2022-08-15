import React, {useContext, useState} from 'react';
import {Route} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import {Routes} from "react-router";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (

        isAuth
            ? <div>
                <Routes>

                    ? {privateRoutes.map(route =>(
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />))}
                </Routes>
            </div>
            : <div>
                <Routes>

                    ? {publicRoutes.map(route =>(
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />))}
                </Routes>
            </div>


    );
};



/*{privateRoutes.map(route =>
    <Route
        path={route.path}
        element={route.element}
    />)
}*/
export default AppRouter;