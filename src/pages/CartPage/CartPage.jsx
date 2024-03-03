import React, { useEffect, useState, useContext } from 'react'
import s from './CartPage.module.scss'
import { CaretUpFill, CaretDownFill, XLg } from 'react-bootstrap-icons'
import CartProduct from '../../components/CartProduct/CartProduct'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import authHeader from '../../services/header.service'

const API_URL = import.meta.env.VITE_API_URL

const CartPage = () => {

    const { userId2 } = useContext(AuthContext)
    console.log(userId2)

    const [cartProducts, setCartProducts] = useState([
        // {
        //     id: 1,
        //     img: 'https://cdn-images.farfetch-contents.com/17/87/93/58/17879358_37823778_1000.jpg',
        //     title: 'Name product',
        //     price: 139,
        //     count: 1,
        //     priceTotal: 139
        // },
        // {
        //     id: 2,
        //     img: 'https://cdn-images.farfetch-contents.com/17/87/93/58/17879358_37823778_1000.jpg',
        //     title: 'Name product',
        //     price: 139,
        //     count: 1,
        //     priceTotal: 139
        // },
    ])

    const increase = (id) => {
        setCartProducts(cartProducts.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    count: ++product.count,
                    priceTotal: product.price * product.count
                }
            }
            return product
        }))
    }

    const decrease = (id) => {
        setCartProducts(cartProducts.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    count: product.count > 1 ? --product.count : product.count,
                    priceTotal: product.price * product.count
                }
            }
            return product
        }))
    }

    const removeItem = (productId) => {
        setCartProducts(cartProducts.filter((p) => p.id !== productId))
    }

    const getShoppingBag = async () => {
        try {
            await axios.get(API_URL + '/api/products/cart', {
                headers: authHeader()
            })
                .then(res => {
                    console.log(res.data)
                    setCartProducts(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getShoppingBag()
    }, [])

    return (
        <div className={s.section_cart}>
            <div className={`${s.in_section_cart} container`}>
                <h2>SHOPPING BAG</h2>
                <div className={s.products}>
                    {
                        cartProducts.length !== 0
                            ? cartProducts.map((product, index) =>
                                <CartProduct removeItem={removeItem} decrease={decrease} increase={increase} key={index} product={product} />
                            )
                            : <h2>Shopping bag is empty</h2>
                    }
                </div>
                <div className={s.result}>
                    <h3>{cartProducts.length} product</h3>
                    <h3>{ }</h3>
                </div>
            </div>
        </div>
    );
};
export default CartPage