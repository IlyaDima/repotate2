import React from 'react';
import MediaQuery from 'react-responsive';

import './roadmap.styles.scss';

import larry1Png from '/src/assets/larry-1.png';
import larry1Webp from '/src/assets/larry-1.webp';
import larry2Png from '/src/assets/larry-2.png';
import larry2Webp from '/src/assets/larry-2.webp';
import larry3Png from '/src/assets/larry-3.png';
import larry3Webp from '/src/assets/larry-3.webp';
import roadmap1Png from '/src/assets/roadmap-1.png';
import roadmap1Webp from '/src/assets/roadmap-1.webp';
import roadmap1MobilePng from '/src/assets/roadmap-1-sm.png';
import roadmap1MobileWebp from '/src/assets/roadmap-1-sm.webp';
import roadmap2Png from '/src/assets/roadmap-2.png';
import roadmap2Webp from '/src/assets/roadmap-2.webp';
import roadmap3Png from '/src/assets/roadmap-3.png';
import roadmap3Webp from '/src/assets/roadmap-3.webp';
import roadmap4Png from '/src/assets/roadmap-4.png';
import roadmap4Webp from '/src/assets/roadmap-4.webp';
import roadmap5Png from '/src/assets/roadmap-5.png';
import roadmap5Webp from '/src/assets/roadmap-5.webp';
import roadmap6Png from '/src/assets/roadmap-6.png';
import roadmap6Webp from '/src/assets/roadmap-6.webp';
import roadmap7Png from '/src/assets/roadmap-7.png';
import roadmap7Webp from '/src/assets/roadmap-7.webp';
import roadmap8Png from '/src/assets/roadmap-8.png';
import roadmap8Webp from '/src/assets/roadmap-8.webp';
import roadmap8MobilePng from '/src/assets/roadmap-8-sm.png';
import roadmap8MobileWebp from '/src/assets/roadmap-8-sm.webp';

const Roadmap = () => {
  return (
    <>
      <MediaQuery maxWidth={1024}>
        <div className='roadmap'>
          <span id="roadmap"></span>
          <div className='roadmap__wrapper'>
            <h3 className='roadmap__heading'>
              Roadmap
            </h3>
            <picture>
              <source srcSet={roadmap1Webp} media="(min-width: 576px)" type='image/webp' />
              <source srcSet={roadmap1MobileWebp} type='image/webp' />
              <source srcSet={roadmap1Png} media="(min-width: 576px)" type='image/png' />
              <source srcSet={roadmap1MobilePng} type='image/png' />
              <img className='roadmap__image-1 reveal' src={roadmap1MobilePng} alt='' />
            </picture>
            <div className="roadmap__box">
              <div className="roadmap__box-left">
                <h4 className="roadmap__title">
                  Birth of Larry
                </h4>
                <p className="roadmap__text">
                  -Building a strong and responsible team
                </p>
                <p className="roadmap__text">
                  -Market analysis
                </p>
                <p className="roadmap__text">
                  -Product Idea and Concept Formating
                </p>
                <p className="roadmap__text">
                  -Smart-Contract and Web Development
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap6Webp} type='image/webp' />
                  <source srcSet={roadmap6Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src={roadmap6Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  Office story
                </h4>
                <p className="roadmap__text">
                  -Forming 1st NFT collection
                </p>
                <p className="roadmap__text">
                  -Building strong and active community
                </p>
                <p className="roadmap__text">
                  -Making a list of our early supporters
                </p>
                <p className="roadmap__text">
                  -1st NFT collection &quot;Larry in the office&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap2Webp} type='image/webp' />
                  <source srcSet={roadmap2Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src={roadmap2Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  African trip
                </h4>
                <p className="roadmap__text">
                  -Forming 2nd NFT collection
                </p>
                <p className="roadmap__text">
                  -Announce some valuable benefits for our holders
                </p>
                <p className="roadmap__text">
                  -Make some extra collaborations and contests
                </p>
                <p className="roadmap__text">
                  -Release 2nd NFT collection &quot;African Trip&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap5Webp} type='image/webp' />
                  <source srcSet={roadmap5Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src={roadmap5Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  European trip
                </h4>
                <p className="roadmap__text">
                  -Forming 3rd NFT collection
                </p>
                <p className="roadmap__text">
                  -Announce our NFT usage in Larry&#39;s metaverse
                </p>
                <p className="roadmap__text">
                  -Big contest with a real-life European cruise trip as a major prize
                </p>
                <p className="roadmap__text">
                  -Release 3rd NFT collection &quot;European Trip&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap3Webp} type='image/webp' />
                  <source srcSet={roadmap3Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src={roadmap3Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  Asian trip
                </h4>
                <p className="roadmap__text">
                  -Forming 4th NFT collection
                </p>
                <p className="roadmap__text">
                  -Announce our P2E metaverse
                </p>
                <p className="roadmap__text">
                  -Making a private community of supporters and holders
                </p>
                <p className="roadmap__text">
                  -Release 4th NFT collection &quot;Asian trip&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap7Webp} type='image/webp' />
                  <source srcSet={roadmap7Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src={roadmap7Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  Colonizing Metaverse
                </h4>
                <p className="roadmap__text">
                  -P2E Metaverse &quot;LarryLand&quot; Demo
                </p>
                <p className="roadmap__text">
                  -IDO
                </p>
                <p className="roadmap__text">
                  -TGE
                </p>
                <p className="roadmap__text">
                  -Disturbing in-game usable NFT&#39;s to our holders
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap4Webp} type='image/webp' />
                  <source srcSet={roadmap4Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src={roadmap4Png} alt='' />
                </picture>
              </div>
            </div>
            <picture>
              <source srcSet={roadmap8Webp} media="(min-width: 576px)" type='image/webp' />
              <source srcSet={roadmap8MobileWebp} type='image/webp' />
              <source srcSet={roadmap8Png} media="(min-width: 576px)" type='image/png' />
              <source srcSet={roadmap8MobilePng} type='image/png' />
              <img className='roadmap__image-1' src={roadmap8MobilePng} alt='' />
            </picture>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <div className='roadmap'>
          <span id="roadmap"></span>
          <div className='roadmap__wrapper'>
            <h3 className='roadmap__heading'>
              Roadmap
            </h3>
            <picture>
              <source srcSet={roadmap1Webp} type='image/webp' />
              <source srcSet={roadmap1Png} type='image/png' />
              <img className='roadmap__image-1 reveal' src={roadmap1Png} alt='' />
            </picture>
            <div className="roadmap__box">
              <div className="roadmap__box-left">
                <h4 className="roadmap__title">
                  Birth of Larry
                </h4>
                <p className="roadmap__text">
                  -Building a strong and responsible team
                </p>
                <p className="roadmap__text">
                  -Market analysis
                </p>
                <p className="roadmap__text">
                  -Product Idea and Concept Formating
                </p>
                <p className="roadmap__text">
                  -Smart-Contract and Web Development
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap2Webp} type='image/webp' />
                  <source srcSet={roadmap2Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src={roadmap2Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  African trip
                </h4>
                <p className="roadmap__text">
                  -Forming 2nd NFT collection
                </p>
                <p className="roadmap__text">
                  -Announce some valuable benefits for our holders
                </p>
                <p className="roadmap__text">
                  -Make some extra collaborations and contests
                </p>
                <p className="roadmap__text">
                  -Release 2nd NFT collection &quot;African Trip&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap3Webp} type='image/webp' />
                  <source srcSet={roadmap3Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src={roadmap3Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  Asian trip
                </h4>
                <p className="roadmap__text">
                  -Forming 4th NFT collection
                </p>
                <p className="roadmap__text">
                  -Announce our P2E metaverse
                </p>
                <p className="roadmap__text">
                  -Making a private community of supporters and holders
                </p>
                <p className="roadmap__text">
                  -Release 4th NFT collection &quot;Asian trip&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap4Webp} type='image/webp' />
                  <source srcSet={roadmap4Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src={roadmap4Png} alt='' />
                </picture>
              </div>
              <div className="roadmap__box-right">
                <picture>
                  <source srcSet={larry1Webp} type='image/webp' />
                  <source srcSet={larry1Png} type='image/png' />
                  <img className='roadmap__larry-1 reveal' src={larry1Png} alt='' />
                </picture>
                <picture>
                  <source srcSet={larry2Webp} type='image/webp' />
                  <source srcSet={larry2Png} type='image/png' />
                  <img className='roadmap__larry-2 reveal' src={larry2Png} alt='' />
                </picture>
                <picture>
                  <source srcSet={larry3Webp} type='image/webp' />
                  <source srcSet={larry3Png} type='image/png' />
                  <img className='roadmap__larry-3 reveal' src={larry3Png} alt='' />
                </picture>
                <picture className='d-flex'>
                  <source srcSet={roadmap6Webp} type='image/webp' />
                  <source srcSet={roadmap6Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src={roadmap6Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  Office story
                </h4>
                <p className="roadmap__text">
                  -Forming 1st NFT collection
                </p>
                <p className="roadmap__text">
                  -Building strong and active community
                </p>
                <p className="roadmap__text">
                  -Making a list of our early supporters
                </p>
                <p className="roadmap__text">
                  -1st NFT collection &quot;Larry in the office&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap5Webp} type='image/webp' />
                  <source srcSet={roadmap5Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src={roadmap5Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  European trip
                </h4>
                <p className="roadmap__text">
                  -Forming 3rd NFT collection
                </p>
                <p className="roadmap__text">
                  -Announce our NFT usage in Larry&#39;s metaverse
                </p>
                <p className="roadmap__text">
                  -Big contest with a real-life European cruise trip as a major prize
                </p>
                <p className="roadmap__text">
                  -Release 3rd NFT collection &quot;European Trip&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet={roadmap7Webp} type='image/webp' />
                  <source srcSet={roadmap7Png} type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src={roadmap7Png} alt='' />
                </picture>
                <h4 className="roadmap__title">
                  Colonizing Metaverse
                </h4>
                <p className="roadmap__text">
                  -WEB3 travel2earn app &quot;LarryLand&quot;
                </p>
                <p className="roadmap__text">
                  -IDO
                </p>
                <p className="roadmap__text">
                  -TGE
                </p>
                <p className="roadmap__text">
                  -Disturbing in-game usable NFT&#39;s to our holders
                </p>
              </div>
            </div>
            <picture>
              <source srcSet={roadmap8Webp} type='image/webp' />
              <source srcSet={roadmap8Png} type='image/png' />
              <img className='roadmap__image-1' src={roadmap8Png} alt='' />
            </picture>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Roadmap;
