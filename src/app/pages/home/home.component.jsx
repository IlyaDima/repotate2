import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import About from '/src/app/components/about/about.component';
import Coffee from '/src/app/components/coffee/coffee.component';
import Flipbook from '/src/app/components/flipbook/flipbook.component';
import Header from '/src/app/components/header/header.component';
import Welcome from '/src/app/components/welcome/welcome.component';
//import Welcome from '/src/app/components/welcome/welcome.component';
//import Larry from '/src/app/components/larry/larry.component';
import FAQ from '/src/app/components/faq/faq.component';
import Footer from '/src/app/components/footer/footer.component';
import Roadmap from '/src/app/components/roadmap/roadmap.component';

HomePageComponent.propTypes = {
  network: PropTypes.string,
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
  publicActive: PropTypes.bool,
  presaleActive: PropTypes.bool,
  raffleStatus: PropTypes.bool,
  setMintType: PropTypes.func,
  setMintProof: PropTypes.func,
};

export default function HomePageComponent({
  currentAccount,
  setCurrentAccount,
  /*
  publicActive,
  presaleActive,
  raffleStatus,
  */
}) {
  const coffeeRef = useRef(null);

  return (
    <>
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <Welcome coffeeRef={coffeeRef} />
      <Coffee ref={coffeeRef} />
      <Flipbook />
      <Roadmap />
      <About />
      {/* <Statistics /> */}
      {/* <Team /> */}
      <FAQ />
      <Footer />
      {/*
      <Welcome
        isMintShown={publicActive || presaleActive || raffleStatus}
      />
      <About />
      <Larry />
      */}
    </>
  );
}
