/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useCountdownHook from '../../hooks/countdown.hook';

import './welcome.styles.scss';

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
        <source srcSet='welcome-1.webp' type='image/webp' />
        <source srcSet='welcome-1.png' type='image/png' />
        <img className='fade-in' src='welcome-1.png' alt='Welcome center image' />
      </picture>
      <div className='welcome__img-container'>
        <picture>
          <source srcSet='welcome-2.webp' type='image/webp' />
          <source srcSet='welcome-2.png' type='image/png' />
          <img className='in-left' src='welcome-2.png' alt='Welcome image 2' />
        </picture>
        <picture>
          <source srcSet='welcome-3.webp' type='image/webp' />
          <source srcSet='welcome-3.png' type='image/png' />
          <img className='fade-in' src='welcome-3.png' alt='Welcome image 3' />
        </picture>
        <picture>
          <source srcSet='welcome-4.webp' type='image/webp' />
          <source srcSet='welcome-4.png' type='image/png' />
          <img className='in-right' src='welcome-4.png' alt='Welcome image 4' />
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
