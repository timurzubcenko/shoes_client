import React from 'react'
import s from './Line.module.scss'
import Modal from '../../../components/admin/Modal/Modal';
import { TrashFill, PencilFill } from 'react-bootstrap-icons'
import { useState } from 'react';
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const Line = ({ product, index, setProducts, products }) => {

    const [isActive, setIsActive] = useState(false)

    const modalActive = () => {
        setIsActive(!isActive)
    }

    const deleteProduct = (productId) => {
        console.log(productId)
        axios.delete(API_URL + '/api/products/product/' + productId)
            .then((res) => {
                console.log(res)
                setProducts(products.filter(pr => pr._id !== productId))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <tr>
                <td>{index + 1}.</td>
                <td>{product.title}</td>
                <td><img src={product.img} alt="" /></td>
                <td>{product.price}</td>
                <td>
                    <button><PencilFill /></button>
                    <button onClick={() => deleteProduct(product._id)}><TrashFill /></button>
                </td>
            </tr>
            {/* <Modal isActive={isActive} setIsActive={setIsActive}>
                <h2>Delete product?</h2>
                <div className={s.btns}>
                    <button onClick={modalActive} className={`${s.btn} ${s.no}`}>No</button>
                    <button onClick={() => deleteProduct(product._id)} className={`${s.btn} ${s.yes}`}>Yes</button>
                </div>
            </Modal> */}
        </>
    );
};
export default Line