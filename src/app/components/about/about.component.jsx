import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

import './about.styles.scss';

import browserImg from '/src/assets/about/browser.webp';
import laptopImg from '/src/assets/about/laptop.webp';
import phoneImg from '/src/assets/about/phone.webp';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const backgroundRef = useRef(null);
  const laptopRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const gsapMatchMedia = gsap.matchMedia();

    gsapMatchMedia.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            snap: {
              snapTo: 'labels',
              duration: 0,
              delay: 0,
              ease: 'power2',
              inertia: false,
            },
            // markers: true,
            id: 'sectionRef',
          },
          ease: 'power2',
        });

        tl.to(backgroundRef.current, {
          scale: 1.75,
        }).to(
          laptopRef.current,
          {
            y: '5vw',
          },
          '<'
        );

        tl.addLabel('zoomed-in');

        tl.to(backgroundRef.current, {
          scale: 1,
        }).to(
          laptopRef.current,
          {
            y: 0,
          },
          '<'
        );

        tl.addLabel('zoomed-out');
      });

      return () => ctx.revert();
    });
  }, []);

  return (
    <section className="about" ref={sectionRef}>
      <div className="background" ref={backgroundRef}>
        <div className="laptop-wrapper" ref={laptopRef}>
          <img className="laptop" src={laptopImg} alt="Laptop" />
          <img className="browser" src={browserImg} alt="Browser page" />
        </div>
        <img
          className="phone"
          src={phoneImg}
          width="344"
          height="656"
          alt="Travel to earn app named 'Larryland' is coming soon"
        />
      </div>
    </section>
  );
}
