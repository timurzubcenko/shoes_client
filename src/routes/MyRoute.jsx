import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
import CartPage from '../pages/CartPage/CartPage'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Men from '../pages/Men/Men';
import Kids from '../pages/Kids/Kids';
import Women from '../pages/Women/Women';
import authHeader from '../services/header.service'
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

const MyRoute = ({ isLogin }) => {

    const [cartProducts, setCartProducts] = useState([])

    const getCart = async () => {
        try {
            await axios.get(API_URL + '/api/products/cart', {
                headers: authHeader()
            })
                .then(res => {
                    setCartProducts(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    if (isLogin) {
        return (
            <div>
                <Header isLogin={isLogin} cartProducts={cartProducts} />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/shoes/:id' element={<ProductPage getCart={getCart} isLogin={isLogin} />} />
                    <Route path='/cart' element={<CartPage getCart={getCart} />} />
                    <Route path='/men' element={<Men />} />
                    <Route path='/women' element={<Women />} />
                    <Route path='/kids' element={<Kids />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                <Footer />
            </div>
        );
    }
    return (
        <div>
            <Header isLogin={isLogin} cartProducts={cartProducts} />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/shoes/:id' element={<ProductPage getCart={getCart} />} />
                <Route path='/cart' element={<CartPage getCart={getCart} />} />
                <Route path='/men' element={<Men />} />
                <Route path='/women' element={<Women />} />
                <Route path='/kids' element={<Kids />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
        </div>
    );
};
export default MyRoute