import React, { useState, useEffect } from 'react'
import s from './Women.module.scss'
import productsData from '../../data/products';
import { Search } from 'react-bootstrap-icons'
import Product from '../../components/Product/Product';
import axios from 'axios'
import Input from '../../components/Input/Input'

const API_URL = import.meta.env.VITE_API_URL

const Women = () => {

    const [products, setProducts] = useState(productsData)

    const getAllShoes = async () => {
        try {

            await axios.get(API_URL + '/api/products')
                .then(res => setProducts(res.data.filter((value) => {
                    return value.gender === 'unisex' || value.gender === 'women'
                })))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllShoes()
    }, [])

    return (
        <div className={s.main}>
            <div className={`${s.in_main} container`}>
                <nav className={s.nav_products}>
                    <h2>Women shoes</h2>
                    <div className={s.search}>
                        <Search />
                        <Input type="text" placeholder='Search...' />
                    </div>
                </nav>
                <div className={s.cards}>
                    {
                        products.map((card, index) =>
                            <Product key={index} card={card} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};
export default Women