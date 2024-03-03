import React, { useEffect, useState } from 'react'
import s from './Products.module.scss'
import { Search } from 'react-bootstrap-icons'
import productsData from '../../data/products';
import Product from '../Product/Product';
import axios from 'axios'
import Input from '../Input/Input'

const API_URL = import.meta.env.VITE_API_URL

const Products = () => {

    const [products, setProducts] = useState(productsData)

    const changeAddCard = (id) => {
        setProducts(products.map((product) => {
            if (id === product.id) {
                return { ...product, isAdd: !product?.isAdd }
            }
            return product
        }))
    }

    const getAllData = async () => {
        axios.get(API_URL + '/api/products/')
            .then((res) => {
                setProducts(res.data)
            })
    }

    useEffect(() => {
        getAllData()
    }, [])


    return (
        <div className={`${s.products} container`}>
            <nav className={s.nav_products}>
                <h2>All Shoes</h2>
                <div className={s.search}>
                    <Search />
                    <Input type="text" placeholder='Search...' />
                </div>
            </nav>
            <div className={s.cards}>
                {
                    products.map((card, index) =>
                        <Product changeAddCard={changeAddCard} key={index} card={card} />
                    )
                }
            </div>
        </div>
    );
};
export default Products