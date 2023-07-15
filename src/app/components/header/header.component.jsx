/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';

import './header.styles.scss';

import BgSound from './bg-sound/bg-sound.component';
import Logo from './logo/logo.component';
import Social from './social/social.component';
import Wallet from './wallet/wallet.component';

const Header = ({ currentAccount, setCurrentAccount }) => {
  return (
    <header className="header">
      <Logo />
      <BgSound />
      {/*<Menu />*/}
      <Social />
      <Wallet
        // onlyAddress
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      {/*<MobileMenu />*/}
    </header>
  );
};

Header.propTypes = {
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
};

export default Header;
