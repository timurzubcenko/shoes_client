import React, { useState, useEffect, useContext } from 'react'
import s from './ProductPage.module.scss'
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider';
import products from '../../data/products';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext';
import authHeader from '../../services/header.service'
import { CaretUpFill, CaretDownFill, XLg, Check2 } from 'react-bootstrap-icons'


const API_URL = import.meta.env.VITE_API_URL

const ProductPage = ({ isLogin, getCart }) => {

    const { userId2 } = useContext(AuthContext)
    // console.log(API_URL)
    const [amount, setAmount] = useState(1)

    const [product, setProduct] = useState(null)
    // console.log(product)
    const [images, setImages] = useState([
        {
            id: 0,
            img: ''
        },
        {
            id: 1,
            img: ''
        },
        {
            id: 2,
            img: ''
        },
        {
            id: 3,
            img: ''
        },
        {
            id: 4,
            img: ''
        },
    ])
    const [isInCart, setIsInCart] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    const { id } = useParams()

    const getProduct = async () => {
        await axios.get(API_URL + '/api/products/product/' + id)
            .then((res) => {
                setProduct(res.data)
                setImages([
                    {
                        id: 0,
                        img: res.data.img
                    },
                    {
                        id: 1,
                        img: res.data.img1
                    },
                    {
                        id: 2,
                        img: res.data.img2
                    },
                    {
                        id: 3,
                        img: res.data.img3
                    },
                    {
                        id: 4,
                        img: res.data.img4
                    },
                ])
                // console.log(res)
            })
    }

    useEffect(() => {
        getProduct()
    }, [])

    const [selectedSize, setSelectedSize] = useState('')

    const selectSize = (index) => {
        setSelectedSize(index)
    }
    // console.log(selectedSize)

    const addToBag = async () => {
        try {
            if (selectedSize !== '' && amount > 0) {
                await axios.post(API_URL + '/api/products/addtobag/', {
                    ...product,
                    selectedSize: selectedSize,
                    amount: amount,
                    price: amount * product.price
                }, {
                    headers: authHeader()
                })
                    .then((res) => {
                        console.log(res.data)
                        setIsInCart(!!res.data)
                        getCart()
                        // location.reload()
                    })
            }
            else {
                alert('Select size and select amount')
            }
        } catch (error) {
            console.log(error)
        }
    }

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
        <div className={s.shoes}>
            <div className={`${s.wrapper} container`}>
                <ImagesSlider images={images} />
                <div className={s.info}>
                    <div className={s.title}>
                        <h1>{product?.title}</h1>
                        <h3>Big Kids' Shoes</h3>
                    </div>
                    <p className={s.price}>{product?.price} €</p>
                    <div className={s.size}>
                        <div className={s.size_header}>
                            <p className={s.select_p}>Select Size</p>
                            <p>Size Guide</p>
                        </div>
                        <ul>
                            {
                                product?.sizes.map((size, index) =>
                                    <li onClick={() => selectSize(size)} className={`${selectedSize === size ? s.activeSize : ''}`} key={index}>{size}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className={s.counter}>
                        <p>{amount}</p>
                        <div className={s.btns}>
                            <button onClick={increase} className={s.btn}><CaretUpFill /></button>
                            <button onClick={decrease} className={s.btn}><CaretDownFill /></button>
                        </div>
                    </div>
                    <div className={s.message}>
                        <span>4 interest-free payments of $23.75 with <br /> <span className={s.span_name}>Klarna</span>.</span>
                        <a href="">Learn More</a>
                    </div>
                    <div className={s.btns}>
                        {
                            isLogin
                                ?
                                !isInCart ? <button onClick={addToBag} className={s.btn}>
                                    {'Add to Bag'}
                                </button>
                                    : <button onClick={addToBag} className={s.btn_done}>
                                        <Check2 />
                                    </button>
                                :
                                <Link to='/login'>
                                    <button className={s.btn}>
                                        Log in
                                    </button>
                                </Link>
                        }
                        <button className={s.btn2}>Favorite</button>
                    </div>
                    <div className={s.description}>
                        <p>{product?.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductPage