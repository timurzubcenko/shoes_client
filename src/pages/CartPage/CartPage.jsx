import React, { useEffect, useState, useContext } from 'react'
import s from './CartPage.module.scss'
import { CaretUpFill, CaretDownFill, XLg } from 'react-bootstrap-icons'
import CartProduct from '../../components/CartProduct/CartProduct'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import authHeader from '../../services/header.service'
import Modal from '../../components/UI/Modal/Modal'
import AnimInput from '../../components/UI/AnimInput/AnimInput'
import BlackBtn from '../../components/UI/BlackBtn/BlackBtn'

const API_URL = import.meta.env.VITE_API_URL

const CartPage = ({ getCart }) => {

    const { userId2 } = useContext(AuthContext)
    const [modalState, setModalState] = useState(false)
    const [stateOrder, setStateOrder] = useState('')

    const [cartProducts, setCartProducts] = useState([])
    const [info, setInfo] = useState({
        name: "",
        surname: "",
        address: "",
        index: ""
    })
    const [totalPrice, setTotalPrice] = useState(0)

    const removeItem = async (productId) => {
        try {

            await axios.delete(API_URL + '/api/products/cart/remove/' + productId, { headers: authHeader() })
                .then((res) => {
                    console.log(res.data)
                    setCartProducts(cartProducts.filter((p) => p._id !== productId))
                    getShoppingBag()
                    getCart()
                })

        } catch (error) {
            console.log(error)
        }
    }

    const getShoppingBag = async () => {
        try {
            await axios.get(API_URL + '/api/products/cart', { headers: authHeader() })
                .then(res => {
                    console.log(res.data)
                    setCartProducts(res.data)
                    const totalPrice = res.data.reduce((acc, elem) => {
                        return acc + elem.price;
                    }, 0);
                    setTotalPrice(totalPrice)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getShoppingBag()
    }, [])

    const activateModal = () => {
        setModalState(!modalState)
    }

    const onChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const addOrder = async () => {
        try {
            await axios.post(API_URL + '/api/order/create', { ...info, totalPrice: totalPrice },
                { headers: authHeader() })
                .then(res => {
                    console.log(res)
                    setInfo({
                        name: '',
                        surname: '',
                        address: '',
                        index: ''
                    })
                    setStateOrder('Order placed')
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={s.section_cart}>
            <div className={`${s.in_section_cart} container`}>
                <h2>SHOPPING BAG</h2>
                <div className={s.products}>
                    {
                        cartProducts.length !== 0
                            ? cartProducts.map((product, index) =>
                                <CartProduct removeItem={removeItem} key={index} product={product} />
                            )
                            : <h2>Shopping bag is empty</h2>
                    }
                </div>
                <div className={s.result}>
                    <h3>{cartProducts.length} product</h3>
                    <div className={s.order}>
                        <h3>{totalPrice} €</h3>
                        {
                            cartProducts.length !== 0
                                ? <button onClick={activateModal} className={s.btn}>
                                    Continue ordering</button>
                                : ''
                        }
                    </div>
                </div>
            </div>
            <Modal activateModal={activateModal} modalState={modalState}>
                <div className={s.inputs}>
                    <AnimInput value={info.name} onChange={onChange} name="name" title={'Name'} type="text" />
                    <AnimInput value={info.surname} onChange={onChange} name="surname" title={'Surname'} type="text" />
                    <AnimInput value={info.address} onChange={onChange} name="address" title={'Address'} type="text" />
                    <AnimInput value={info.index} onChange={onChange} name="index" title={'Index'} type="text" />
                </div>
                <h4 className={s.state_order}>{stateOrder}</h4>
                <div className={s.btns}>
                    <BlackBtn onClick={addOrder}>Send</BlackBtn>
                </div>
            </Modal>
        </div>
    );
};
export default CartPage