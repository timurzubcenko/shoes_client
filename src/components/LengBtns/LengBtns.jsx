import React, { useState } from 'react'
import s from './LengBtns.module.scss'

const LengBtns = () => {

    const [isActive, setIsActive] = useState(false)
    const [langActive, setLangActive] = useState(
        {
            id: 1,
            lang: "ENG",
        })

    const [langs, setLangs] = useState([
        {
            id: 1,
            lang: "ENG",
        },
        {
            id: 2,
            lang: "EST",
        },
        {
            id: 3,
            lang: "RUS",
        },
        {
            id: 4,
            lang: "UA",
        },
    ])

    const selectLang = (lang) => {
        setLangActive(lang)
        setIsActive(false)
    }

    return (
        <div className={s.lang}>
            <button onClick={() => setIsActive(!isActive)} className={s.btn}>{langActive.lang}</button>
            <ul className={`${s.list} ${isActive ? s.active : ''}`}>
                {
                    langs.map((lang) =>
                        <li className={`${s.lang} ${langActive.id === lang.id ? s.active : ''}`} onClick={() => selectLang(lang)} key={lang.id}>{lang.lang}</li>
                    )
                }
            </ul>
        </div>
    );
};
export default LengBtns