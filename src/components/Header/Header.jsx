import React, { useEffect, useState, useContext } from 'react'
import s from './Header.module.scss'
import LengBtns from '../LengBtns/LengBtns';
import { Link } from 'react-router-dom';
import Btn from '../UI/Btn/Btn';
import { Cart4, PersonFill } from 'react-bootstrap-icons'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios'
import authHeader from '../../services/header.service'

const API_URL = import.meta.env.VITE_API_URL

const Header = ({ isLogin }) => {

    const { token2, email2, logout2, name2 } = useContext(AuthContext)
    // console.log(token2, email2, isLogin)

    const [isActive, setIsActive] = useState(false)
    const [isActiveUser, setIsActiveUser] = useState(false)
    const [cartProducts, setCartProducts] = useState([])

    const clickMenu = () => {
        setIsActive(!isActive)
        window.scrollTo(0, 0);
    }

    const clickUser = () => {
        setIsActiveUser(!isActiveUser)
    }

    const getCart = async () => {
        try {
            await axios.get(API_URL + '/api/products/cart', {
                headers: authHeader()
            })
                .then(res => {
                    // console.log(res.data)
                    setCartProducts(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        <header className={s.header}>
            <div className={`${s.in_header} container`}>
                <h2 className="logo"><Link to="/">SHOES</Link></h2>
                <div className={`${s.header_burger} ${isActive ? s.active : ''}`} onClick={clickMenu}>
                    <span></span>
                </div>
                <nav className={`${s.header_menu} ${isActive ? s.active : ''}`}>
                    <ul className={s.header_list}>
                        <li onClick={clickMenu}><Link to="/">HOME</Link></li>
                        <li onClick={clickMenu}>MEN</li>
                        <li onClick={clickMenu}>WOMEN</li>
                        <li onClick={clickMenu}>KIDS</li>
                    </ul>
                    <div className={s.lang_btns_in_menu}>
                        <Link onClick={clickMenu} to="/cart"><Btn className={s.btn_cart}><Cart4 /><h4>{cartProducts.length}</h4></Btn></Link>
                        {
                            isLogin
                                ? <div className={s.user}>
                                    <button onClick={clickUser} className={s.btn_user}><PersonFill /><p>{name2}</p></button>
                                    <div className={`${s.modal_logout} ${isActiveUser ? s.active : ''}`}>
                                        <h3>{email2}</h3>
                                        <button onClick={logout2}>log out</button>
                                    </div>
                                </div>
                                : <Link onClick={clickMenu} to="/login"><Btn><PersonFill /></Btn></Link>
                        }
                        {/* <LengBtns /> */}
                    </div>
                </nav>
                <div className={s.lang_btns}>
                    <Link onClick={clickMenu} to="/cart"><Btn className={s.btn_cart}><Cart4 />{cartProducts.length !== 0 ? <h4>{cartProducts.length}</h4> : ''}</Btn></Link>
                    {
                        isLogin
                            ? <div className={s.user}>
                                <button onClick={clickUser} className={s.btn_user}><PersonFill /><p>{name2}</p></button>
                                <div className={`${s.modal_logout} ${isActiveUser ? s.active : ''}`}>
                                    <h3>{email2}</h3>
                                    <button onClick={logout2}>log out</button>
                                </div>
                            </div>
                            : <Link onClick={clickMenu} to="/login"><Btn><PersonFill /></Btn></Link>
                    }
                    {/* <LengBtns /> */}
                </div>
            </div>
        </header>
    );
};
export default Header