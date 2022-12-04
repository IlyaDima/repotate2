import React from 'react';

import './about.styles.scss';
import environment from '../../../environment/environment';

import larryAnimatedMp4 from '../../../assets/larry-animated.mp4';
import larryAnimatedWebm from '../../../assets/larry-animated.webm';

const About = () => {
  return (
    <div className="about">
      <span id="about"></span>
      <div className="about__colonialist">
        {/*<img src={larryAnimated} alt='About colonialist 1' />*/}
        <video width="420" height="420" autoPlay={true} playsInline muted loop>
          <source src={larryAnimatedWebm} type="video/webm" />
          <source src={larryAnimatedMp4} type="video/mp4" />
        </video>
      </div>
      <div className="about__texts">
        <h3 className="about__heading">Larry, The Adventurer</h3>
        <p>
          The inspiring story of an unremarkable person who made his dream come
          true.
        </p>
        <p>
          Our NFT series is a lifetime story of a young man who has made a
          conscious decision not to be a victim of common standards of living
          but fulfill his cherished dream since childhood to go on a trip around
          the world.
        </p>
        <p>
          We invite you to join Larry on his incredible journey around the most
          beautiful places in Europe, Africa and Asia.
        </p>
        <a
          href={environment.discord}
          className="about__button"
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="about__button-title">Join discord</h4>
        </a>
      </div>
    </div>
  );
};

export default About;
