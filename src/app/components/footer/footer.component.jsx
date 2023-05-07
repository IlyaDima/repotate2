import React from 'react';
import Logo from '../header/logo/logo.component';

import './footer.styles.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <a href="#" className="footer__link">
            Whitepaper
          </a>
          <a href="#" className="footer__link">
            Privacy Policy
          </a>
          <a href="#" className="footer__link">
            Terms & Conditions
          </a>
        </div>
        <Logo footer />
        <p className="footer__copyright">© 2023 Larry. All rights reserved</p>
        <div className="footer__right">
          <a href="#" className="footer__link">
            About
          </a>
          <a href="#" className="footer__link">
            Tokenomics
          </a>
          <a href="#" className="footer__link">
            Roadmap
          </a>
          <a href="#" className="footer__link">
            Team
          </a>
          <a href="#" className="footer__link">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}
