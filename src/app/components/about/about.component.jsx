import React from 'react';

import './about.styles.scss';

const About = () => {
  return (
    <div className='about' id="about">
      <img className='about__mobile-img' src='about.png' alt='About mobile' />
      <div className='about__colonialist'>
        <img src='about.png' alt='About colonialist 1' />
      </div>
      <div className='about__texts'>
        <h3 className='about__heading'>About</h3>
        <p>
          The inspiring story of an unremarkable  person who made his dream come true.
        </p>
        <p>
          Our NFT series is a lifetime story of a young man who has made a conscious decision not to be a victim of common standards of living but fulfill his cherished dream
          since childhood to go on a trip around the world. We invite you to join Larry
          on his incredible journey around the most beautiful places in Europe, Africa and Asia.
        </p>
        <p>
          First collection “Larry In The Office” tells us about the time when Larry was fully immersed and absorbed by the daily office routine working hard as an ordinary employee and gives us all the reasons how his life has been changed once
          and forever.
        </p>
        <a
          href="#"
          className='about__button'
          target='_blank'
          rel='noreferrer'
        >
          <h4 className='about__button-title'>
            Join discord
          </h4>
        </a>
      </div>
    </div>
  );
};

export default About;
