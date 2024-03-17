import React, { useEffect, useState } from 'react'
import s from './Products.module.scss'
import { Search } from 'react-bootstrap-icons'
import Product from '../Product/Product';
import axios from 'axios'
import Input from '../Input/Input'

const API_URL = import.meta.env.VITE_API_URL

const Products = () => {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

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

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const productFilter = () => {
        return products.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase())
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
                    <Input onChange={onChangeSearch} vlaue={search} type="text" placeholder='Search...' />
                </div>
            </nav>
            <div className={s.cards}>
                {
                    productFilter().map((card, index) =>
                        <Product changeAddCard={changeAddCard} key={index} card={card} />
                    )
                }
            </div>
        </div>
    );
};
export default Products