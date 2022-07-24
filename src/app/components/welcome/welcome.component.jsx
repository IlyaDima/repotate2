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
      <img src='welcome-1.png' alt='welcome center image' className='fade-in' />
      <div className='welcome__img-container'>
        <img src='welcome-2.png' alt='welcome image 2' className='in-left' />
        <img src='welcome-3.png' alt='welcome image 3' className='fade-in'/>
        <img src='welcome-4.png' alt='welcome image 4' className='in-right' />
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
