import React, { useState } from 'react'
import s from './Register.module.scss'
import Input from '../../components/UI/Input/Input'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

const Register = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        name: '',
        password: ''
    })

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const onSubmit = async () => {
        try {

            axios.post(API_URL + '/api/authusers/register', form)
                .then((res) => {
                    console.log(res)
                    navigate('/login')
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
                    <Input onChange={changeHandler} name='name' type='text' placeholder="Name...*" />
                    <Input onChange={changeHandler} name='password' type='password' placeholder="Password...*" />
                </div>
                <div className={s.btns}>
                    <Link to="/login">I have an account</Link>
                    <button onClick={onSubmit} className={s.btn}>Log in</button>
                </div>
            </div>
        </div>
    );
};
export default Register