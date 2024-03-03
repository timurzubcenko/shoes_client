import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
import CartPage from '../pages/CartPage/CartPage'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const MyRoute = ({ isLogin }) => {
    if (isLogin) {
        return (
            <div>
                <Header isLogin={isLogin} />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/shoes/:id' element={<ProductPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                <Footer />
            </div>
        );
    }
    return (
        <div>
            <Header isLogin={isLogin} />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/shoes/:id' element={<ProductPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
        </div>
    );
};
export default MyRoute