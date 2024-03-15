import React from 'react'
import s from './BlackBtn.module.scss'

const BlackBtn = ({ children, ...props }) => {
    return (
        <button {...props} className={s.btn}>
            {children}
        </button>
    );
};
export default BlackBtn