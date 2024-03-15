import React from 'react'
import s from './Modal.module.scss'

const Modal = ({ children, activateModal, modalState }) => {
    return (
        <div onClick={activateModal} className={`${s.modal} ${modalState ? s.active : ''}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.window}>
                {children}
            </div>
        </div>
    );
};
export default Modal