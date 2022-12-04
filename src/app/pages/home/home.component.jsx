import React from 'react';
import PropTypes from 'prop-types';

import './home.styles.scss';
import './slider.css';

import Header from '../../components/header/header.component';
import AnimatedWelcome from '../../components/animated/welcome/welcome.component';
import AnimatedAbout from '../../components/animated/about/about.component';
//import Welcome from '../../components/welcome/welcome.component';
//import About from '../../components/about/about.component';
import Statistics from '../../components/statistics/statistics.component';
//import Larry from '../../components/larry/larry.component';
import Footer from '../../components/footer/footer.component';
import Team from '../../components/team/team.component';
import Roadmap from '../../components/roadmap/roadmap.component';
import FAQ from '../../components/faq/faq.component';

const HomePageComponent = ({
  currentAccount,
  setCurrentAccount,
  /*
  publicActive,
  presaleActive,
  raffleStatus,
  */
}) => {
  return (
    <section className="home-page">
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <AnimatedWelcome />
      <AnimatedAbout />
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
    </section>
  );
};

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

export default HomePageComponent;
