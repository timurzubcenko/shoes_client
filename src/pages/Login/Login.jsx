import React, { useState, useContext } from 'react'
import s from './Login.module.scss'
import Input from '../../components/UI/Input/Input'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

const Login = () => {

    const navigate = useNavigate()

    const { login2 } = useContext(AuthContext)


    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const onSubmit = async () => {
        try {

            axios.post(API_URL + '/api/authusers/login', form)
                .then((response) => {
                    console.log(response)
                    login2(response.data.token, response.data.userId, response.data.email, response.data.name)
                    navigate('/')
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
                    <Input onChange={changeHandler} name='email' type='text' placeholder="Email...*" />
                    <Input onChange={changeHandler} name='password' type='password' placeholder="Password...*" />
                </div>
                <div className={s.btns}>
                    <Link to="/register">I don't have an account</Link>
                    <button onClick={onSubmit} className={s.btn}>Log in</button>
                </div>
            </div>
        </div>
    );
};
export default Login