import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

import './about.styles.scss';

import browserImg from '/src/assets/about/browser.webp';
import laptopImg from '/src/assets/about/laptop.webp';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const backgroundRef = useRef(null);
  const laptopRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.25,
          snap: {
            snapTo: 'labels',
            duration: 0.5,
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
  }, []);

  return (
    <section className="about" ref={sectionRef}>
      <div className="background" ref={backgroundRef}>
        <div className="laptop-wrapper" ref={laptopRef}>
          <img className="laptop" src={laptopImg} alt="Laptop" />
          <img className="browser" src={browserImg} alt="Browser page" />
        </div>
      </div>
    </section>
  );
}
