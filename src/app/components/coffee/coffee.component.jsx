import React, { forwardRef } from 'react';
import './coffee.styles.scss';

//import coffeeSmokeAnimation from '/src/assets/coffee/coffee-smoke.gif';
//import coffeeImg from '/src/assets/coffee/coffee.webp';
import coffeeAnimation from '/src/assets/coffee/coffee-animation.gif';
import coffeeBar from '/src/assets/coffee/coffee-bar.png';
//import larryAnimatedMp4 from '/src/assets/larry-animated.mp4';
//import larryAnimatedWebm from '/src/assets/larry-animated.webm';

const Coffee = forwardRef((props, coffeeRef) => {
  return (
    <section ref={coffeeRef} className="coffee">
      <div className="coffee__bg">
        <svg
          viewBox="0 0 1661 828"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1557.48 69.2124L112.48 5.68151C54.445 3.12993 6 49.4917 6 107.583V588.908C6 615.635 16.4902 641.294 35.2142 660.366L163.567 791.104C185.226 813.166 215.723 824.213 246.487 821.141L1563.13 689.673C1615.28 684.466 1655 640.586 1655 588.178V171.114C1655 116.523 1612.02 71.6103 1557.48 69.2124Z"
            fill="#34BBFF"
            stroke="black"
            strokeWidth="11"
          />
        </svg>
      </div>
      <div className="coffee__content">
        <div className="coffee__sheet">
          <div className="coffee__sheet-content">
            <h2 className="coffee__sheet-content-heading">
              Prepare your <br />
              cup of coffee...
            </h2>
            <p className="coffee__sheet-content-text">
              I was just an ordinary guy:
              <br />
              Graduated from school, then university and then a five-by-two job,
              with my own workplace, health insurance and an office mug gifted
              by my colleagues (You can see it standing there -&gt;)
              <br />
              <br />
              It seemed that people all over the world were suffering from
              poverty and lack of opportunity, so why should I complain?
              <br />
              Yeah, that&apos;s what I believed during my 5 year career in a
              simple estate insurance agency. on my first
              &quot;anniversary&quot; I realized it was all bullshit and decided
              to go on a world trip because that&apos;s what I wished for since
              I was a kid.{' '}
            </p>
          </div>
        </div>
        <img className="coffee__bar" src={coffeeBar} alt="" />
        <img className="coffee__animation" src={coffeeAnimation} alt="" />
      </div>
    </section>
  );
});

Coffee.displayName = 'Coffee';
export default Coffee;
