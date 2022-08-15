import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context";
import MyButton from "../button/MyButton";
import s from "./Navbar.module.css"

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false)
    }

    return (
        <div className="navbar">

            <div className="navbar_links">

                <NavLink className={s.logout} to="/posts" >Посты</NavLink>
                <NavLink to="/about" > Инофрмация</NavLink>
                <MyButton className={s.logoutBtn} onClick={logout} >Выйти</MyButton>
            </div>
        </div>
    );
};

export default Navbar;