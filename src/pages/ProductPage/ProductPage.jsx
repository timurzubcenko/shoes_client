import React, { useState, useEffect, useContext } from 'react'
import s from './ProductPage.module.scss'
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider';
import products from '../../data/products';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext';
import authHeader from '../../services/header.service'

const API_URL = import.meta.env.VITE_API_URL

const ProductPage = () => {

    const { userId2 } = useContext(AuthContext)
    console.log(API_URL)

    const [product, setProduct] = useState(null)
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

    const [selectedSize, setSelectedSize] = useState(-1)

    const selectSize = (index) => {
        setSelectedSize(index)
    }

    const addToBag = async () => {
        try {

            await axios.post(API_URL + '/api/products/addtobag/', product, {
                headers: authHeader()
            })
                .then((res) => {
                    console.log(res.data)
                })

        } catch (error) {
            console.log(error)
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
                    <p className={s.price}>{product?.price}</p>
                    <div className={s.size}>
                        <div className={s.size_header}>
                            <p className={s.select_p}>Select Size</p>
                            <p>Size Guide</p>
                        </div>
                        <ul>
                            {
                                product?.sizes.map((size, index) =>
                                    <li onClick={() => selectSize(index)} className={`${selectedSize === index ? s.activeSize : ''}`} key={index}>{size}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className={s.message}>
                        <span>4 interest-free payments of $23.75 with <br /> <span className={s.span_name}>Klarna</span>.</span>
                        <a href="">Learn More</a>
                    </div>
                    <div className={s.btns}>
                        <button onClick={addToBag} className={s.btn}>Add to Bag</button>
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