import React from 'react';
import Logo from '../header/logo/logo.component';

import './footer.styles.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo />
        <p className="footer__copyright">© 2023 Larry. All rights reserved</p>
      </div>
    </footer>
  );
}
