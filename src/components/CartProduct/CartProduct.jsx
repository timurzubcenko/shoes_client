import React, { useState } from 'react'
import s from './CartProduct.module.scss'
import { CaretUpFill, CaretDownFill, XLg } from 'react-bootstrap-icons'

const API_URL = import.meta.env.VITE_API_URL

const CartProduct = ({ product, removeItem }) => {
    const [amount, setAmount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(product.price)

    const increase = () => {
        setAmount(amount + 1)
        setTotalPrice((amount + 1) * product.price)
    }

    const decrease = () => {
        if (amount > 1) {
            setAmount(amount - 1)
            setTotalPrice((amount - 1) * product.price)
        }
    }

    return (
        <div className={s.product}>
            <div className={s.img}>
                <img src={API_URL + product.img} alt="" />
            </div>
            <h3>{product.title}</h3>
            <div className={s.counter}>
                <p>{product.amount}</p>
                {/* <div className={s.btns}>
                    <button onClick={increase} className={s.btn}><CaretUpFill /></button>
                    <button onClick={decrease} className={s.btn}><CaretDownFill /></button>
                </div> */}
            </div>
            <h3>{product.selectedSize}</h3>
            <h3 className={s.price}>{totalPrice} €</h3>
            <div onClick={() => removeItem(product._id)} className={s.delete}><XLg /></div>
        </div >
    );
};
export default CartProduct