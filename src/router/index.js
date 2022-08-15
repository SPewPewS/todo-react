
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import React from "react";
import Login from "../pages/Login";


export const privateRoutes = [
    {path: "/posts", element: <Posts></Posts> },
    {path: "/about", element: <About></About>},
    {path: "/posts/:id", element: <PostIdPage></PostIdPage>},
    {path: "/*", element: <Posts></Posts>}
]

export const publicRoutes = [
        {path: "/login", element: <Login></Login>},
        {path: "/about", element: <About></About>},
        {path: "/*", element: <Login></Login>}
    ]

