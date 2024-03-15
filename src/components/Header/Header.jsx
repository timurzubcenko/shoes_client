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

const Header = ({ isLogin, cartProducts }) => {

    const { token2, email2, logout2, name2 } = useContext(AuthContext)

    const [isActive, setIsActive] = useState(false)
    const [isActiveUser, setIsActiveUser] = useState(false)


    const clickMenu = () => {
        setIsActive(!isActive)
        window.scrollTo(0, 0);
    }

    const clickUser = () => {
        setIsActiveUser(!isActiveUser)
    }

    return (
        <header className={s.header}>
            <div className={`${s.in_header} container`}>
                <h2 className="logo"><Link to="/">SHOES.TZ</Link></h2>
                <div className={`${s.header_burger} ${isActive ? s.active : ''}`} onClick={clickMenu}>
                    <span></span>
                </div>
                <nav className={`${s.header_menu} ${isActive ? s.active : ''}`}>
                    <ul className={s.header_list}>
                        <li onClick={clickMenu}><Link to="/">HOME</Link></li>
                        <li onClick={clickMenu}><Link to="/men">MEN</Link></li>
                        <li onClick={clickMenu}><Link to="/women">WOMEN</Link></li>
                        {/* <li onClick={clickMenu}><Link to="/kids">KIDS</Link></li> */}
                    </ul>
                    <div className={s.lang_btns_in_menu}>
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