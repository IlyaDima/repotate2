import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import './home.styles.scss';
import './slider.css';

import Header from '../../components/header/header.component';
import Welcome from '../../components/welcome/welcome.component';
//import About from '../../components/about/about.component';
//import Statistics from '../../components/statistics/statistics.component';
//import Larry from '../../components/larry/larry.component';
//import Footer from '../../components/footer/footer.component';
//import Team from '../../components/team/team.component';
//import Roadmap from '../../components/roadmap/roadmap.component';
//import FAQ from '../../components/faq/faq.component';
const About = lazy(() => import('../../components/about/about.component'));
const Statistics = lazy(() => import('../../components/statistics/statistics.component'));
const Larry = lazy(() => import('../../components/larry/larry.component'));
const Roadmap = lazy(() => import('../../components/roadmap/roadmap.component'));
const Team = lazy(() => import('../../components/team/team.component'));
const FAQ = lazy(() => import('../../components/faq/faq.component'));
const Footer = lazy(() => import('../../components/footer/footer.component'));

const renderLoader = () => <p>Loading...</p>;

const HomePageComponent = ({
  currentAccount,
  setCurrentAccount,
  publicActive,
  presaleActive,
  raffleStatus,
}) => {
  return (
    <section className='home-page'>
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <Welcome
        isMintShown={publicActive || presaleActive || raffleStatus}
      />
      <Suspense fallback={renderLoader()}>
        <About />
        <Statistics />
        <Larry />
        <Roadmap />
        <Team />
        <FAQ />
        <Footer />
      </Suspense>
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
}

export default HomePageComponent;
