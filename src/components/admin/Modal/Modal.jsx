import React from 'react'
import s from './Modal.module.scss'

const Modal = ({ children, isActive, setIsActive }) => {

    const close = () => {
        setIsActive(!isActive)
    }

    return (
        <div onClick={close} className={`${s.modal} ${isActive ? s.active : ''}`}>
            <div className={s.window} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
export default Modal