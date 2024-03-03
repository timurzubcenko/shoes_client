import React from 'react'
import s from './Textarea.module.scss'

const Textarea = ({ ...props }) => {
    return (
        <textarea {...props} className={s.textarea} ></textarea>
    );
};
export default Textarea