import React, { useState } from 'react'
import s from './ImagesSlider.module.scss'

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
                            <li key={image.id} onMouseEnter={() => clickImg(index)} className={`${s.picture} ${active === index ? s.active : ''}`}><img src={image.img} alt="" /></li>
                        )
                        : '/'
                }
            </ul>
            {images[0].img ? <img src={images[active].img} alt="" /> : '/'}
        </div>
    );
};
export default ImagesSlider