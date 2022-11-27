import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './about.styles.scss'

import laptopLidTop from '/src/assets/parallax/laptop-lid-top.png'
import laptopLidBottom from '/src/assets/parallax/laptop-lid-bottom.png'
import laptopKeyboard from '/src/assets/parallax/laptop-keyboard-cropped.png'
import larryAnimatedMp4 from '/src/assets/larry-animated.mp4'
import larryAnimatedWebm from '/src/assets/larry-animated.webm'

const About = () => {
  gsap.registerPlugin(ScrollTrigger)

  const backgroundRef = useRef(null)
  const laptopRef = useRef(null)
  const laptopTopRef = useRef(null)
  const laptopBottomRef = useRef(null)
  const laptopKeyboardRef = useRef(null)
  const laptopLidTopRef = useRef(null)
  const laptopLidBottomRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: backgroundRef.current,
        pin: true,
        start: '-=25',
        end: 'top',
        //markers: true,
        id: 'about-1',
      },
      ease: 'power2',
    })

    tl.to(backgroundRef.current, {
      scale: 1.5,
    })
      .fromTo(laptopRef.current, {
        scale: .875,
      },
      {
        yPercent: -15,
        scale: 1.5,
      }, '<')

    // Second half of the animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: backgroundRef.current,
        pin: true,
        start: '-=24',
        end: '+=100',
        //markers: true,
        id: 'about-2',
      },
      ease: 'power2',
    })
    tl2.to(backgroundRef.current, { scale: 1 })
      .to(laptopRef.current, {
        yPercent: -50,
        scale: .875,
      }, '<')
      .to(laptopTopRef.current, {
        rotationX: -90,
      }, '<+=50%')
      .to(laptopBottomRef.current, {
        rotationX: 90,
        ease: 'power3.out',
      }, '<')
      .fromTo(laptopLidTopRef.current, {
        height: 0,
      },
      {
        height: 'auto',
        rotationX: 90,
        scale: 1.05,
      }, '<')
      .fromTo(laptopLidBottomRef.current, {
        height: 0,
      },
      {
        height: 'auto',
        rotationX: -90,
        scale: .95,
        yPercent: -100,
      }, '<')
      .to(laptopBottomRef.current, {
        yPercent: -4,
      }, '<')
      .to(laptopKeyboardRef.current, {
        scale: 0.9,
        ease: 'power3.out',
      }, '<+=25%')
      .to(laptopKeyboardRef.current, {
        autoAlpha: 0,
      }, '<')
  }, [])

  return (
    <section className="about">
      <div className="background" ref={backgroundRef}>
        <div className="laptop" ref={laptopRef}>
          <div className="laptop__top" ref={laptopTopRef}>
            <div className="laptop-screen">
              <div className="laptop-screen__content">
                <h1 className="laptop-screen__heading">Larry, the adventurer</h1>
                <p className="laptop-screen__text">
                  The inspiring story of an unremarkable person who made his dream come true.
                  <br />
                  <br />
                The first collection &#34;Larry In The Office&#34; tells us about the time when Larry was fully immersed and absorbed by the daily office routine, working hard as an ordinary employee, and gives us all the reasons why his life has changed once and for all.</p>
                <div className="nft-placeholder">
                  <video width='206' height='206' autoPlay={true} playsInline muted loop>
                    <source src={larryAnimatedWebm} type='video/webm' />
                    <source src={larryAnimatedMp4} type='video/mp4' />
                  </video>
                </div>
              </div>
            </div>
            <img
              className="laptop-lid-top"
              ref={laptopLidTopRef}
              src={laptopLidTop}
              alt=""
            />
          </div>
          <div className="laptop__bottom" ref={laptopBottomRef}>
            <img
              className="laptop-keyboard"
              ref={laptopKeyboardRef}
              src={laptopKeyboard}
              alt=""
            />
            <img
              className="laptop-lid-bottom"
              ref={laptopLidBottomRef}
              src={laptopLidBottom}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
