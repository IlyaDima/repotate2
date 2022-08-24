import React from 'react';

import './logo.styles.scss';

const Logo = () => {
  return (
    <div className='logo-wrapper'>
      <a href='/'>
        <picture>
          <source srcSet="logo.webp" type="image/webp" />
          <source srcSet="logo.png" type="image/png" />
          <img src="logo.png" alt="Larryland Logo" />
        </picture>
      </a>
    </div>
  );
};

export default Logo;
