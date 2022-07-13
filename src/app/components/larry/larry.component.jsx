import React from 'react';

import Starfield from '../../components/starfield/starfield.component';

import './larry.styles.scss';

const Larry = () => {
  return (
    <div className='larry' id="larry">
      <div className="larry__wrapper">
        <div className="larry__left">
          <div className="larry__header">
            <h3 className='larry__title'>
              Larry, The Adventurer
            </h3>
            <img className='larry__pen' src="pen.png" />
          </div>
          <p>
            The inspiring story of an unremarkable person who made his dream come true.
          </p>
          <p>
            Our NFT series is a lifetime story  of a young man
            who has made a conscious decision not to be a victim of common
            standards of living but  fulfill his cherisheddream since childhood
            to go on a trip around the world. We invite you to join Larry on his incredible
            journey around the most beautiful places in Europe , Africa and Asia.
          </p>
          <p>
            First collection “Larry In The Office” tells us about the time
            when Larry was fully  immersed and absorbed by the daily
            office routine working hard as an ordinary employee
            and gives us all the reasons how  his life has been changed
            once and forever.
          </p>
          <img className='larry__buklet' src="buklet.png" />
        </div>
        <div className="larry__right">
          <Starfield />
        </div>
      </div>
    </div>
  );
};

export default Larry;
