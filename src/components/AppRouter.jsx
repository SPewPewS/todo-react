import React from 'react';
import {Route} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import {Routes} from "react-router";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/posts' element={<Posts /> }/>
                <Route path='/about' element={<About /> }/>
                <Route path='/posts/:id' element={<PostIdPage /> }/>
                <Route path='*' element={<Posts /> }/>
            </Routes>
        </div>
    );
};

export default AppRouter;