import React, { useEffect, useRef } from 'react'
import s from './HomePage.module.scss'
import Jordan from '../../assets/img/Jordan.png'
import { ArrowDownCircle } from 'react-bootstrap-icons'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Products from '../../components/Products/Products'
import nike from '../../assets/img/Nike.png'
import three from '../../assets/img/03.png'


const HomePage = () => {

    let arrow = useRef(null)
    let jordan = useRef(null)
    let main = useRef(null)
    let sneakers = useRef(null)
    let ball_1 = useRef(null)
    let ball_2 = useRef(null)
    let ball_3 = useRef(null)
    let ball_4 = useRef(null)
    let ball_5 = useRef(null)
    let ball_6 = useRef(null)
    let ball_7 = useRef(null)
    let ball_8 = useRef(null)

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

        // gsap.to(jordan, {
        //     scrollTrigger: {
        //         trigger: main,
        //         start: 'top top',
        //         end: 'bottom top',
        //         scrub: true,
        //         // markers: true,
        //     },
        //     // opacity: .4,
        //     // scale: .9,
        //     y: -30,
        // })

        gsap.to(sneakers, {
            scrollTrigger: {
                trigger: main,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                // markers: true,
            },
            y: 160,
        })

        const tl2 = gsap.timeline({ repeat: -1, ease: 'power2.inOut' })
            .to(jordan, {
                rotate: -10,
                duration: 10,
                transformOrigin: '50% 50%',
            })
            .to(jordan, {
                rotate: 0,
                duration: 10,
                transformOrigin: '50% 50%',
            })

        const tlBall_1 = gsap.timeline({ repeat: -1, ease: 'power2.inOut' })
            .to(ball_1, {
                y: -80,
                duration: 7
            })
            .to(ball_1, {
                y: 0,
                duration: 7
            })

        const tlBall_2 = gsap.timeline({ repeat: -1, ease: 'power2.inOut', })
            .to(ball_2, {
                y: -120,
                duration: 7,
            })
            .to(ball_2, {
                y: 0,
                duration: 7
            })

        const tlBall_3 = gsap.timeline({ repeat: -1, ease: 'power2.inOut' })
            .to(ball_3, {
                y: -60,
                x: 30,
                duration: 7,
            })
            .to(ball_3, {
                y: 0,
                x: 0,
                duration: 7
            })

        const tlBall_4 = gsap.timeline({ repeat: -1, ease: 'power2.inOut' })
            .to(ball_4, {
                y: 50,
                duration: 5
            })
            .to(ball_4, {
                y: 0,
                duration: 5
            })

        const tlBall_5 = gsap.timeline({ repeat: -1, ease: 'power2.inOut' })
            .to(ball_5, {
                y: 60,
                duration: 5
            })
            .to(ball_5, {
                y: 0,
                duration: 5
            })

        const tlBall_6 = gsap.timeline({ repeat: -1, ease: 'power2.inOut' })
            .to(ball_6, {
                y: 40,
                duration: 5
            })
            .to(ball_6, {
                y: 0,
                duration: 5
            })
    }, [])

    return (
        <div className={s.main}>
            <div className={s.main_header} ref={el => main = el}>
                <div className={s.decor_balls}>
                    <div ref={el => ball_1 = el} className={s.ball_1}></div>
                    <div ref={el => ball_2 = el} className={s.ball_2}></div>
                    <div ref={el => ball_3 = el} className={s.ball_3}></div>
                    <div ref={el => ball_4 = el} className={s.ball_4}></div>
                    <div ref={el => ball_5 = el} className={s.ball_5}></div>
                    <div ref={el => ball_6 = el} className={s.ball_6}></div>
                    <div ref={el => ball_7 = el} className={s.ball_7}>
                        <img src={nike} alt="nike" />
                    </div>
                    <div ref={el => ball_8 = el} className={s.ball_8}>
                        <img src={three} alt="nike" />
                    </div>
                </div>
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