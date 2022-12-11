import React from 'react';
import './coffee.styles.scss';

import coffeeBg from '/src/assets/coffee/coffee-bg.webp';
import coffeeSmokeAnimation from '/src/assets/coffee/coffee-smoke.gif';
import coffeeImg from '/src/assets/coffee/coffee.webp';
import larryAnimatedMp4 from '/src/assets/larry-animated.mp4';
import larryAnimatedWebm from '/src/assets/larry-animated.webm';

export default function Coffee() {
  return (
    <section className="coffee">
      <img className="coffee__bg" src={coffeeBg} alt="Office background" />
      <img
        src={coffeeSmokeAnimation}
        className="coffee__smoke"
        alt="Coffee smoke"
      />
      <video className="nft-animation" autoPlay={true} playsInline muted loop>
        <source src={larryAnimatedWebm} type="video/webm" />
        <source src={larryAnimatedMp4} type="video/mp4" />
      </video>
      <img
        className="coffee__img"
        src={coffeeImg}
        alt="Coffee image elements"
      />
    </section>
  );
}
