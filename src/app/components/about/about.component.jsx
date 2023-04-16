import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { forwardRef, useEffect, useRef } from 'react';

import './about.styles.scss';

import larryAnimatedMp4 from '/src/assets/larry-animated.mp4';
import larryAnimatedWebm from '/src/assets/larry-animated.webm';
import laptopKeyboard from '/src/assets/parallax/laptop-keyboard-cropped.png';
import laptopLidBottom from '/src/assets/parallax/laptop-lid-bottom.png';
import laptopLidTop from '/src/assets/parallax/laptop-lid-top.png';

const About = forwardRef((props, aboutRef) => {
  gsap.registerPlugin(ScrollTrigger);

  const backgroundRef = useRef(null);
  const laptopRef = useRef(null);
  const laptopTopRef = useRef(null);
  const laptopBottomRef = useRef(null);
  const laptopKeyboardRef = useRef(null);
  const laptopLidTopRef = useRef(null);
  const laptopLidBottomRef = useRef(null);
  const laptopScreenRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: backgroundRef.current,
          pin: true,
          start: '-=25',
          //end: 'center',
          //markers: true,
          id: 'about-1',
          scrub: true, // true ONLY FOR TESTING
          /* DISABLED FOR TESTING ONLY
          snap: {
            snapTo: 'labelsDirectional',
            duration: 0,
            delay: 0,
            inertia: false,
          },
          */
        },
      });

      tl.set(laptopLidTopRef.current, { autoAlpha: 0 })
        .to(backgroundRef.current, {
          scale: 1.5,
        })
        .fromTo(
          laptopRef.current,
          { scale: 0.875 },
          {
            scale: 1.25,
            yPercent: -4,
          },
          '<'
        )
        .addLabel('zoomed')
        .to(backgroundRef.current, {
          scale: 1,
        })
        .to(laptopRef.current, { scale: 0.875, yPercent: -50 }, '<')
        // Start closing the top
        .to(
          laptopTopRef.current,
          {
            rotateX: -90,
          },
          '<'
        )
        .to(
          laptopScreenRef.current,
          {
            autoAlpha: 0,
          },
          '<'
        )
        .to(
          laptopLidTopRef.current,
          {
            autoAlpha: 1,
            rotateX: 90,
          },
          '<'
        )
        // Top closed, start closing the bottom
        .to(
          laptopBottomRef.current,
          {
            rotateX: 90,
            //scale: 1.05,
            //yPercent: -40,
          },
          '<'
        )
        .to(laptopLidBottomRef.current, { rotateX: -90, yPercent: -115 }, '<')
        .to(laptopKeyboardRef.current, { autoAlpha: 0 }, '<')
        .to(laptopRef.current, { yPercent: -60 }, '<');

      /*
      tl.to(backgroundRef.current, {
        scale: 1.5,
      })
        .fromTo(
          laptopRef.current,
          {
            scale: 0.875,
          },
          {
            yPercent: -20,
            scale: 1.25,
          },
          '<'
        )
        .addLabel('zoomed')
        .to(backgroundRef.current, { scale: 1 })
        .to(
          laptopRef.current,
          {
            yPercent: -55,
            scale: 0.875,
          },
          '<'
        )
        .to(
          laptopTopRef.current,
          {
            rotationX: -90,
          },
          '<+=50%'
        )
        .to(
          laptopBottomRef.current,
          {
            rotationX: 90,
            ease: 'power3.out',
          },
          '<'
        )
        .fromTo(
          laptopLidTopRef.current,
          {
            height: 0,
          },
          {
            height: 'auto',
            rotationX: 90,
            scale: 1.1,
            yPercent: 21,
          },
          '<'
        )
        .fromTo(
          laptopLidBottomRef.current,
          {
            autoAlpha: 0,
            height: 0,
          },
          {
            autoAlpha: 1,
            height: 'auto',
            rotationX: -90,
            scale: 0.95,
            yPercent: -100,
          },
          '<'
        )
        .to(
          laptopKeyboardRef.current,
          {
            scale: 0.9,
            ease: 'power3.out',
          },
          '<+=25%'
        )
        .to(
          laptopKeyboardRef.current,
          {
            autoAlpha: 0,
          },
          '<'
        )
        .addLabel('end');

        */
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <div className="background" ref={backgroundRef}>
        <div className="laptop" ref={laptopRef}>
          <div className="laptop__top" ref={laptopTopRef}>
            <div className="laptop-screen" ref={laptopScreenRef}>
              <div className="laptop-screen__content">
                <h1 className="laptop-screen__heading">
                  Larry, the adventurer
                </h1>
                <p className="laptop-screen__text">
                  The inspiring story of an unremarkable person who made his
                  dream come true.
                  <br />
                  <br />
                  The first collection &#34;Larry In The Office&#34; tells us
                  about the time when Larry was fully immersed and absorbed by
                  the daily office routine, working hard as an ordinary
                  employee, and gives us all the reasons why his life has
                  changed once and for all.
                </p>
                <div className="nft-placeholder">
                  <video
                    width="206"
                    height="206"
                    autoPlay={true}
                    playsInline
                    muted
                    loop
                  >
                    <source src={larryAnimatedWebm} type="video/webm" />
                    <source src={larryAnimatedMp4} type="video/mp4" />
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
});

About.displayName = 'About';
export default About;
