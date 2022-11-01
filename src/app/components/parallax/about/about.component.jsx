import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './about.styles.scss';

import laptopScreen from '/src/assets/parallax/laptop-screen.png'
import laptopKeyboard from '/src/assets/parallax/laptop-keyboard.png'

const About = () => {
  gsap.registerPlugin(ScrollTrigger)

  const backgroundRef = useRef(null)
  const laptopRef = useRef(null)
  const laptopScreenRef = useRef(null)
  const laptopKeyboardRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: backgroundRef.current,
        pin: true,
        start: '-=25',
        end: '+=750',
        scrub: .25,
        anticipatePin: 1,
      },
      ease: 'power2',
    })

    tl.to(backgroundRef.current, {
      scale: 1.5,
    })
      .to(laptopRef.current, {
        yPercent: -20,
        scale: 1.5,
      }, '<')
  }, [])

  return (
    <section className="about">
      <div className="background" ref={backgroundRef}>
        <div className="laptop" ref={laptopRef}>
          <img
            className="laptop-screen"
            ref={laptopScreenRef}
            src={laptopScreen}
            alt=""
          />
          <img
            className="laptop-keyboard"
            ref={laptopKeyboardRef}
            src={laptopKeyboard}
            alt=""
          />
          <div className="laptop-screen__content">
            <h1>Larry, the adventurer</h1>
            <p>
              The inspiring story of an unremarkable person who made his dream come true.
              <br />
              <br />
              The first collection &#34;Larry In The Office&#34; tells us about the time when Larry was fully immersed and absorbed by the daily office routine, working hard as an ordinary employee, and gives us all the reasons why his life has changed once and for all.
            </p>
            <div className="nft-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
