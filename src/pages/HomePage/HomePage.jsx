import React, { useEffect, useRef } from 'react'
import s from './HomePage.module.scss'
import Jordan from '../../assets/img/Jordan.png'
import { ArrowDownCircle } from 'react-bootstrap-icons'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Products from '../../components/Products/Products'

const HomePage = () => {

    let arrow = useRef(null)
    let jordan = useRef(null)
    let main = useRef(null)
    let sneakers = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, ease: 'none' })
            .to(arrow, {
                y: 10,
                duration: 1,
            })
            .to(arrow, {
                y: 0,
                duration: 1,
            })

        gsap.to(jordan, {
            scrollTrigger: {
                trigger: main,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                // markers: true,
            },
            // opacity: .4,
            // scale: .9,
            y: -100,
        })

        gsap.to(sneakers, {
            scrollTrigger: {
                trigger: main,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                // markers: true,
            },
            y: 200,
        })

        const tl2 = gsap.timeline({ repeat: -1, ease: 'none' })
            .to(jordan, {
                scale: 1.1,
                rotate: -10,
                duration: 10,
                transformOrigin: '50% 50%',
            })
            .to(jordan, {
                scale: 1,
                rotate: 0,
                duration: 10,
                transformOrigin: '50% 50%',
            })
    }, [])

    return (
        <div className={s.main}>
            <div className={s.main_header} ref={el => main = el}>
                <div className={`${s.center} container`}>
                    <h1 ref={el => sneakers = el}>SNEAKERS</h1>
                    <img src={Jordan} alt="Jordan" ref={el => jordan = el} />
                </div>
                <div className={s.arrow_scroll}>
                    <p>Scroll down</p>
                    <div ref={el => arrow = el}>
                        <ArrowDownCircle />
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
};
export default HomePage