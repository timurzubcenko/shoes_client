import React from 'react'
import s from './AnimInput.module.scss'

const AnimInput = ({ title, type, name, onChange, value }) => {
    return (
        <label className={s.label} htmlFor="">
            <input onChange={onChange} name={name} type={type} value={value} />
            <span>{title}</span>
            <div className={s.line}></div>
        </label>
    );
};
export default AnimInput