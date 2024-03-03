import React, { useState } from 'react'
import s from './Product.module.scss'
import { Heart, Plus, HeartFill, Check } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';


const Product = ({ card, changeAddCard }) => {

    const [heartActive, setHeartActive] = useState(false)
    const [addActive, setAddActive] = useState(false)

    const changeActive = (e) => {
        setHeartActive(!heartActive)
    }

    // const changeActiveAdd = () => {
    //     setAddActive(!addActive)
    // }

    const scrollUp = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Link onClick={scrollUp} to={"/shoes/" + card._id}>
            <div className={s.card}>
                <div className={s.img}>
                    <img src={card.img} alt="" />
                </div>
                <h3 className={s.title}>{card.title}</h3>
                <div className={s.info}>
                    <div className={s.price}>
                        <h4>PRICE:</h4>
                        <p>{card.price}</p>
                    </div>
                    <div onClick={() => changeAddCard(card.id)} className={`${s.add} ${card?.isAdd ? s.active : ''}`}>
                        {card?.isAdd ? <Check /> : <Plus />}
                    </div>
                </div>
                <div onClick={changeActive} className={`${s.heart} ${heartActive ? s.active : ''}`}>
                    {heartActive ? <HeartFill /> : <Heart />}
                </div>
            </div>
        </Link>
    );
};
export default Product