import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './welcome.styles.scss';

import arm from '/src/assets/parallax/arm.png'
import larry from '/src/assets/parallax/larry.png'
import office from '/src/assets/parallax/office.png'
import table from '/src/assets/parallax/table.png'
import textBubble from '/src/assets/parallax/text-bubble.png'

const Welcome = () => {
  gsap.registerPlugin(ScrollTrigger)

  const armRef = useRef(null)
  const frameRef = useRef(null)
  const larryRef = useRef(null)
  const officeRef = useRef(null)
  const tableRef = useRef(null)
  const textBubbleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: frameRef.current,
        pin: true,
        start: '-=25',
        end: 'top',
        //markers: true,
        //id: 'welcome-1',
      },
      ease: 'power2',
    })

    tl.fromTo(officeRef.current, {
      scale: 2,
      filter: 'brightness(.5)',
    },
    {
      scale: 1,
      filter: 'brightness(1)',
    })
      .fromTo(tableRef.current, {
        xPercent: -50,
        yPercent: 100,
      },
      {
        yPercent: 5,
      }, '<')
      .fromTo(larryRef.current, {
        yPercent: 108,
        xPercent: -50,
      },
      {
        yPercent: 0,
      }, '<25%')

    // Second half of the animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: frameRef.current,
        pin: true,
        start: '-=24',
        end: '+=100',
        //markers: true,
        //id: 'welcome-2',
      },
      ease: 'power2',
    })
    tl2.to(larryRef.current, {
      rotate: -10,
      scale: 1.4,
      xPercent: -120,
    })
      .to(tableRef.current, {
        scale: 1.5,
        xPercent: -70,
        yPercent: 0,
      }, '<')
      .to(officeRef.current, {
        scale: 1.5,
        filter: 'blur(1px)',
      }, '<')
      .fromTo(armRef.current, {
        rotate: 45,
        xPercent: 70,
        yPercent: 100,
      },
      {
        rotate: 0,
        yPercent: 20,
      }, '<+=25%')
      .fromTo(textBubbleRef.current, {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }, '<')
  }, [])

  return (
    <section className="welcome">
      <div className="frame" ref={frameRef}>
        <img
          className="office"
          ref={officeRef}
          src={office}
          alt=""
        />
        <img
          className="larry"
          ref={larryRef}
          src={larry}
          alt=""
        />
        <img
          className="arm"
          ref={armRef}
          src={arm}
          alt=""
        />
        <img
          className="table"
          ref={tableRef}
          src={table}
          alt=""
        />
        <div className="text-bubble" ref={textBubbleRef} style={{ backgroundImage: `url(${textBubble})` }}>
          <h2>Larryland!</h2>
        </div>
      </div>
    </section>
  );
};

export default Welcome
