import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import AnimatedAbout from '../../components/animated/about/about.component';
import AnimatedWelcome from '../../components/animated/welcome/welcome.component';
import Header from '../../components/header/header.component';
//import Welcome from '../../components/welcome/welcome.component';
//import About from '../../components/about/about.component';
import Statistics from '../../components/statistics/statistics.component';
//import Larry from '../../components/larry/larry.component';
import FAQ from '../../components/faq/faq.component';
import Footer from '../../components/footer/footer.component';
import Roadmap from '../../components/roadmap/roadmap.component';
import Team from '../../components/team/team.component';

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
  const aboutRef = useRef(null);

  return (
    <>
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <AnimatedWelcome aboutRef={aboutRef} />
      <AnimatedAbout ref={aboutRef} />
      {/*
      <Welcome
        isMintShown={publicActive || presaleActive || raffleStatus}
      />
      <About />
      <Larry />
      */}
      <Statistics />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}
