import React, { useState } from 'react'
import s from './ImagesSlider.module.scss'

const API_URL = import.meta.env.VITE_API_URL

const ImagesSlider = ({ images }) => {

    const [active, setActive] = useState(0)

    const clickImg = (index) => {
        setActive(index)
    }

    return (
        <div className={s.images}>
            <ul>
                {
                    images[0].img
                        ? images.map((image, index) =>
                            <li key={image.id} onMouseEnter={() => clickImg(index)} className={`${s.picture} ${active === index ? s.active : ''}`}><img src={API_URL + image.img} alt="" /></li>
                        )
                        : '/'
                }
            </ul>
            {images[0].img ? <img src={API_URL + images[active].img} alt="" /> : '/'}
        </div>
    );
};
export default ImagesSlider