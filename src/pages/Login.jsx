import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = (props) => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = e => {
        e.preventDefault();
        setIsAuth(true);


    }

    return (
        <div>
            <form>
                <MyInput type={"text"} placeholder={"Введите логин"} />
                <MyInput type={"password"} placeholder={"Введите пароль"} />
                <MyButton onClick={login}>Войти</MyButton>


            </form>
        </div>
    );
};

export default Login;

