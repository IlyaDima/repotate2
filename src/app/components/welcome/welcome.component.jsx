import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import './welcome.styles.scss';

import arm from '/src/assets/parallax/arm.png';
import larry from '/src/assets/parallax/larry.png';
import office from '/src/assets/parallax/office.png';
import table from '/src/assets/parallax/table.png';
import textBubble from '/src/assets/parallax/text-bubble.png';

Welcome.propTypes = {
  coffeeRef: PropTypes.object,
};

export default function Welcome() {
  gsap.registerPlugin(ScrollTrigger);

  const armRef = useRef(null);
  const frameRef = useRef(null);
  const larryRef = useRef(null);
  const officeRef = useRef(null);
  const tableRef = useRef(null);
  const textBubbleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: frameRef.current,
          pin: true,
          start: '-=25',
          end: 'center',
          //markers: true,
          id: 'welcome-1',
        },
        ease: 'power2',
      });

      tl.fromTo(
        officeRef.current,
        {
          scale: 2,
          filter: 'brightness(.5)',
        },
        {
          scale: 1,
          filter: 'brightness(1)',
        }
      )
        .to(
          tableRef.current,
          {
            y: '-31.5vw',
          },
          '<'
        )
        .fromTo(
          larryRef.current,
          {
            x: '30.5vw',
          },
          {
            y: '-39vw',
          },
          '<25%'
        );

      // Second half of the animation
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: frameRef.current,
          pin: true,
          start: '-=24',
          end: 'center',
          //markers: true,
          id: 'welcome-2',
        },
        ease: 'power2',
      });
      tl2
        .to(larryRef.current, {
          rotate: -10,
          scale: 1.4,
          x: '6vw',
          y: '-37vw',
        })
        .to(
          tableRef.current,
          {
            scale: 1.5,
            x: '-25.25vw',
            y: '-34vw',
          },
          '<'
        )
        .to(
          officeRef.current,
          {
            scale: 1.375,
            filter: 'blur(2px)',
          },
          '<'
        )
        .fromTo(
          armRef.current,
          {
            rotate: 45,
          },
          {
            rotate: 0,
            x: '-44vw',
            y: '-34.5vw',
          },
          '<+=25%'
        )
        .fromTo(
          textBubbleRef.current,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
          },
          '<'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="welcome">
      <div className="frame" ref={frameRef}>
        <img className="office" ref={officeRef} src={office} alt="" />
        <img className="larry" ref={larryRef} src={larry} alt="" />
        <img className="arm" ref={armRef} src={arm} alt="" />
        <img className="table" ref={tableRef} src={table} alt="" />
        <div
          className="text-bubble"
          ref={textBubbleRef}
          style={{ backgroundImage: `url(${textBubble})` }}
        >
          <p>
            Good day.
            <br />
            My name is Larry!
            <br />
            How are you?
          </p>
        </div>
      </div>
    </section>
  );
}
