import React, { useLayoutEffect, useRef } from 'react'
import s from './Footer.module.scss'
import logo from '../../assets/img/1.png'
import { ArrowRight, EnvelopeFill, TelephoneFill, Instagram, Github, Telegram, Linkedin, Facebook } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Footer = () => {

    let footer = useRef(null)
    let title = useRef(null)
    let btn = useRef(null)
    let btns = useRef(null)
    let p = useRef(null)

    // gsap.registerPlugin(ScrollTrigger)

    // const animation = () => {
    //     gsap.from([title, btn, btns, p], {
    //         scrollTrigger: {
    //             trigger: footer,
    //             // scrub: true,
    //             toggleActions: 'restart',
    //             start: 'top bottom',
    //             end: 'bottom bottom',
    //             // markers: true,
    //         },
    //         transformOrigin: '50% 50%',
    //         scale: .5,
    //         opacity: 0,
    //         duration: 1.5,
    //         stagger: .5
    //         // duration: 2,
    //     })
    // }

    // useLayoutEffect(() => {
    //     animation()
    // }, [])

    return (
        <footer className={s.footer} ref={el => footer = el}>
            <div className={`${s.in_footer} container`}>
                <h2 ref={el => title = el}>Contacts</h2>
                <button ref={el => btn = el} className={s.btn}>Go to Bag</button>
                <div ref={el => btns = el} className={s.social_btns}>
                    <a href=""><Instagram /></a>
                    <a href=""><Telegram /></a>
                    <a href=""><Facebook /></a>
                </div>
                <p ref={el => p = el} className={s.end_footer}>subscribe to us <br /> on Instagram, GitHub, Telegram, Linkedin</p>
            </div>
        </footer>
    );
};
export default Footer