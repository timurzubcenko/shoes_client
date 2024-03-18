import React, { useState, useContext } from 'react'
import s from './Login.module.scss'
import { Link } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import { AuthContext } from '../../../context/AuthContext'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const Login = () => {

    const { logIn } = useContext(AuthContext)
    const [stateError, setStateError] = useState('')

    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const loginHandler = async () => {
        try {
            await axios.post(API_URL + '/api/auth/login', { ...form })
                .then((response) => {
                    logIn(response.data.token, response.data.userId, response.data.email, response.data.name)
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                    setStateError('Неверный логин или пароль')
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.window}>
                <h2>Authorization</h2>
                <div className={s.inputs}>
                    <Input name='login' onChange={changeHandler} type='text' placeholder="Login...*" />
                    <Input name='password' onChange={changeHandler} type='password' placeholder="Password...*" />
                </div>
                <div className={s.error}>
                    <h3>{stateError}</h3>
                </div>
                <div className={s.btns}>
                    <Link to="/register">I don't have an account</Link>
                    <button onClick={loginHandler} className={s.btn}>Log in</button>
                </div>
            </div>
        </div>
    );
};
export default Login