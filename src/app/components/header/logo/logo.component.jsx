import React from 'react';

import './logo.styles.scss';

import logoWebp from 'src/assets/logo.webp';

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logoWebp} width={224} height={142} alt="Larryland Logo" />
    </a>
  );
};

export default Logo;
