import PropTypes from 'prop-types';
import React from 'react';

import './logo.styles.scss';

import logoWebp from 'src/assets/logo.webp';

const Logo = ({ footer }) => {
  return (
    <a href="/" className={`logo ${footer ? 'logo--footer' : ''}`}>
      <img src={logoWebp} width={224} height={142} alt="Larryland Logo" />
    </a>
  );
};

Logo.propTypes = {
  footer: PropTypes.bool,
};

export default Logo;
