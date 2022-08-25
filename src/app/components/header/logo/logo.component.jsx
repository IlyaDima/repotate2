import React from 'react';

import './logo.styles.scss';

import logoPng from 'src/assets/logo.png';
import logoWebp from 'src/assets/logo.webp';

const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <a href='/'>
        <picture>
          <source srcSet={logoWebp} type='image/webp' />
          <source srcSet={logoPng} type='image/png' />
          <img src={logoPng} alt='Larryland Logo' />
        </picture>
      </a>
    </div>
  );
};

export default Logo;
