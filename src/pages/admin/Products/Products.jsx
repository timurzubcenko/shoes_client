import React, { useEffect, useState } from 'react'
import s from './Products.module.scss'
import productsData from '../../../data/products';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Line from '../../../components/admin/Line/Line';

const API_URL = import.meta.env.VITE_API_URL

const Products = () => {
    const [products, setProducts] = useState(productsData)

    const getAllProducts = async () => {
        axios.get(API_URL + "/api/products/")
            .then((res) => {
                setProducts(res.data)
            })
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className={s.products}>
            <header>
                <h2>Products</h2>
                <Link to="/admin/newproduct"><button>NEW PRODUCT</button></Link>
            </header>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>IMAGE</th>
                        <th>PRICE</th>
                        <th>BTNS</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) =>
                        <Line setProducts={setProducts} products={products} index={index} product={product} key={index} />
                    )}
                </tbody>
            </table>

        </div>
    );
};
export default Products