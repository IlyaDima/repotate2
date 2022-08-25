/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useCountdownHook from '../../hooks/countdown.hook';

import './welcome.styles.scss';

import welcome1Png from '/src/assets/welcome-1.png';
import welcome1Webp from '/src/assets/welcome-1.webp';
import welcome2Png from '/src/assets/welcome-2.png';
import welcome2Webp from '/src/assets/welcome-2.webp';
import welcome3Png from '/src/assets/welcome-3.png';
import welcome3Webp from '/src/assets/welcome-3.webp';
import welcome4Png from '/src/assets/welcome-4.png';
import welcome4Webp from '/src/assets/welcome-4.webp';

const Welcome = ({ isMintShown }) => {
  const { date } = useCountdownHook('Feb 08, 2022 20:00:00');
  const [, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const navigate = useNavigate();

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='welcome'>
      <picture>
        <source srcSet={welcome1Webp} type='image/webp' />
        <source srcSet={welcome1Png} type='image/png' />
        <img className='fade-in' src={welcome1Png} alt='Welcome center image' />
      </picture>
      <div className='welcome__img-container'>
        <picture>
          <source srcSet={welcome2Webp} type='image/webp' />
          <source srcSet={welcome2Png} type='image/png' />
          <img className='in-left' src={welcome2Png} alt='Welcome image 2' />
        </picture>
        <picture>
          <source srcSet={welcome3Webp} type='image/webp' />
          <source srcSet={welcome3Png} type='image/png' />
          <img className='fade-in' src={welcome3Png} alt='Welcome image 3' />
        </picture>
        <picture>
          <source srcSet={welcome4Webp} type='image/webp' />
          <source srcSet={welcome4Png} type='image/png' />
          <img className='in-right' src={welcome4Png} alt='Welcome image 4' />
        </picture>
      </div>
      {
        isMintShown ? (
          <button
            className='welcome__mint-button'
            onClick={() => navigate('/mint')}
          >
            <h4 className='welcome__mint-button-title'>
              MINT
            </h4>
          </button>
        ) : null
      }
    </div>
  );
};

Welcome.propTypes = {
  isMintShown: PropTypes.bool,
};

export default Welcome;
