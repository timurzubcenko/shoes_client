import React from 'react'
import s from './CartProduct.module.scss'
import { CaretUpFill, CaretDownFill, XLg } from 'react-bootstrap-icons'

const CartProduct = ({ product, increase, decrease, removeItem }) => {
    return (
        <div className={s.product}>
            <div className={s.img}>
                <img src={product.img} alt="" />
            </div>
            <h3>{product.title}</h3>
            <h3 className={s.price}>{product.price}</h3>
            <div onClick={() => removeItem(product.id)} className={s.delete}><XLg /></div>
        </div >
    );
};
export default CartProduct