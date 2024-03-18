import React, { useState } from 'react'
import s from './CartProduct.module.scss'
import { CaretUpFill, CaretDownFill, XLg } from 'react-bootstrap-icons'

const API_URL = import.meta.env.VITE_API_URL

const CartProduct = ({ product, removeItem, increase, decrease }) => {
    return (
        <div className={s.product}>
            <div className={s.img}>
                <img src={API_URL + product.img} alt="" />
            </div>
            <h3>{product.title}</h3>
            <div className={s.counter}>
                <p>{product.amount}</p>
                <div className={s.btns}>
                    <button onClick={() => increase(product._id)} className={s.btn}><CaretUpFill /></button>
                    <button onClick={() => decrease(product._id)} className={s.btn}><CaretDownFill /></button>
                </div>
            </div>
            <h3>{product.selectedSize}</h3>
            <h3 className={s.price}>{product.price} €</h3>
            <div onClick={() => removeItem(product._id)} className={s.delete}><XLg /></div>
        </div >
    );
};
export default CartProduct