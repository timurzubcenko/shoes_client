import React, { useEffect, useState, useContext } from 'react'
import s from './Header.module.scss'
import LengBtns from '../LengBtns/LengBtns';
import { Link } from 'react-router-dom';
import Btn from '../UI/Btn/Btn';
import { Cart4, PersonFill } from 'react-bootstrap-icons'
import { AuthContext } from '../../context/AuthContext';

const Header = ({ isLogin }) => {

    const { token2, email2, logout2 } = useContext(AuthContext)
    // console.log(token2, email2, isLogin)

    const [isActive, setIsActive] = useState(false)
    const [isActiveUser, setIsActiveUser] = useState(false)

    const clickMenu = () => {
        setIsActive(!isActive)
    }

    const clickUser = () => {
        setIsActiveUser(!isActiveUser)
    }

    return (
        <header className={s.header}>
            <div className={`${s.in_header} container`}>
                <h2 className="logo"><Link to="/">SHOES</Link></h2>
                <div className={`${s.header_burger} ${isActive ? s.active : ''}`} onClick={clickMenu}>
                    <span></span>
                </div>
                <nav className={`${s.header_menu} ${isActive ? s.active : ''}`}>
                    <ul className={s.header_list}>
                        <li><Link to="/">HOME</Link></li>
                        <li>MEN</li>
                        <li>WOMEN</li>
                        <li>KIDS</li>
                    </ul>
                    <div className={s.lang_btns_in_menu}>
                        <Link to="/cart"><Btn><Cart4 /></Btn></Link>
                        {
                            isLogin
                                ? <div className={s.user}>
                                    <button onClick={clickUser} className={s.btn_user}><PersonFill /><p>{email2}</p></button>
                                    <div className={`${s.modal_logout} ${isActiveUser ? s.active : ''}`}>
                                        <h3>{email2}</h3>
                                        <button onClick={logout2}>log out</button>
                                    </div>
                                </div>
                                : <Link to="/login"><Btn><PersonFill /></Btn></Link>
                        }
                        {/* <LengBtns /> */}
                    </div>
                </nav>
                <div className={s.lang_btns}>
                    <Link to="/cart"><Btn><Cart4 /></Btn></Link>
                    {
                        isLogin
                            ? <div className={s.user}>
                                <button onClick={clickUser} className={s.btn_user}><PersonFill /><p>{email2}</p></button>
                                <div className={`${s.modal_logout} ${isActiveUser ? s.active : ''}`}>
                                    <h3>{email2}</h3>
                                    <button onClick={logout2}>log out</button>
                                </div>
                            </div>
                            : <Link to="/login"><Btn><PersonFill /></Btn></Link>
                    }
                    {/* <LengBtns /> */}
                </div>
            </div>
        </header>
    );
};
export default Header