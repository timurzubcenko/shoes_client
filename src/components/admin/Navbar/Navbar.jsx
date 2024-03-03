import React, { useContext, useState } from 'react'
import s from './Navbar.module.scss'
import { AuthContext } from '../../../context/AuthContext'
import { Link, NavLink } from 'react-router-dom';

const linksData = [
    {
        id: 1,
        title: 'Products',
        link: '/admin/products',
    },
    {
        id: 2,
        title: 'New product',
        link: '/admin/newproduct',
    },
    {
        id: 3,
        title: 'Events',
        link: '/admin/events',
    },
    {
        id: 4,
        title: 'Clients',
        link: '/admin/clients',
    },
    {
        id: 5,
        title: 'Home',
        link: '/',
    },
]

const Navbar = () => {

    const [links, setLinks] = useState(linksData)

    const { logout } = useContext(AuthContext)

    const isActive = ({ isActive }) => {
        return isActive ? s.active : ""
    }

    return (
        <div className={s.nav}>
            <header>
                Menu
            </header>
            <div className={s.wrapper}>
                <ul>
                    {
                        links.map((link, index) =>
                            <li key={link.id} className={`${s.link}`}><NavLink className={isActive} to={link.link}>{link.title}</NavLink></li>
                        )
                    }
                    {/* <li className={`${s.link}`}><Link to='/admin/events'>Events</Link></li>
                    <li className={`${s.link}`}><Link to='/admin/clients'>Clients</Link></li>
                    <li className={`${s.link}`}><Link to='/'>Home</Link></li> */}
                </ul>
                <button onClick={logout} className={s.btn}>Выйти</button>
            </div>
        </div>
    );
};
export default Navbar