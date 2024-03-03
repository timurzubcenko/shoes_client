import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
import Products from '../pages/admin/Products/Products';
import Login from '../pages/admin/Login/Login';
import Navbar from '../components/admin/Navbar/Navbar';
import Clients from '../pages/admin/Clients/Clients';
import NewProduct from '../pages/admin/NewProduct/NewProduct';

const AdminRoute = ({ isAdmin }) => {
    if (isAdmin) {
        return (
            <div className='admin_wrapper'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Products />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/clients' element={<Clients />} />
                    <Route path='/newproduct' element={<NewProduct />} />
                </Routes>
            </div>
        )
    }
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            {/* <Route path='*' element={<Navigate to="/admin" />} /> */}
        </Routes>
    );
};
export default AdminRoute