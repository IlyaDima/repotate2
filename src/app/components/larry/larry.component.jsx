import React from 'react';

import Starfield from '../../components/starfield/starfield.component';

import './larry.styles.scss';

import bookletPng from '/src/assets/booklet.png';
import bookletWebp from '/src/assets/booklet.webp';
import penPng from '/src/assets/pen.png';
import penWebp from '/src/assets/pen.png';

const Larry = () => {
  return (
    <div className="larry-section" id="larry">
      <div className="larry-section__wrapper">
        <div className="larry-section__left">
          <div className="larry-section__header">
            <h3 className="larry-section__title">
              Season 1 “Larry In The Office”
            </h3>
            <picture>
              <source srcSet={penWebp} type="image/webp" />
              <source srcSet={penPng} type="image/png" />
              <img className="larry-section__pen" src={penPng} alt="Pen" />
            </picture>
          </div>
          <p>
            First collection “Larry In The Office” tells us about the time when
            Larry was fully immersed and absorbed by the daily office routine
            working hard as an ordinary employee and gives us all the reasons
            how his life has been changed once and forever.
          </p>
          <p>Larry in the office supply is 1111 NFT`s:</p>
          <p className="larry-section__list ">11 Legendary NFT`s.</p>
          <p className="larry-section__list ">
            111 NFT`s of #1 larry-section, the adventurer comics.
          </p>
          <p className="larry-section__list ">
            333 NFT`s with Africa/Asia/Europe guide on a table that will make
            you eligible for getting one of future collections NFT for free.
          </p>
          <p className="larry-section__list ">
            656 NFT`s Larry in the office daily portraits.
          </p>
          <picture>
            <source srcSet={bookletWebp} type="image/webp" />
            <source srcSet={bookletPng} type="image/png" />
            <img
              className="larry-section__booklet"
              src={bookletPng}
              alt="Booklet"
            />
          </picture>
        </div>
        <div className="larry-section__right">
          <Starfield />
        </div>
      </div>
    </div>
  );
};

export default Larry;
