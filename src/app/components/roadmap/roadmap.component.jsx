import React from 'react';
import MediaQuery from 'react-responsive';

import './roadmap.styles.scss';

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
              <source srcSet='roadmap-1.webp' type='image/webp' />
              <source srcSet='roadmap-1.png' type='image/png' />
              <img className='roadmap__image-1 reveal' src='roadmap-1.png' alt='' />
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
                  <source srcSet='roadmap-6.webp' type='image/webp' />
                  <source srcSet='roadmap-6.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src='roadmap-6.png' alt='' />
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
                  <source srcSet='roadmap-2.webp' type='image/webp' />
                  <source srcSet='roadmap-2.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src='roadmap-2.png' alt='' />
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
                  <source srcSet='roadmap-5.webp' type='image/webp' />
                  <source srcSet='roadmap-5.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src='roadmap-5.png' alt='' />
                </picture>
                <h4 className="roadmap__title">
                  European trip
                </h4>
                <p className="roadmap__text">
                  -Forming 3rd NFT collection
                </p>
                <p className="roadmap__text">
                  -Announce our NFT usage in Larry`s metaverse
                </p>
                <p className="roadmap__text">
                  -Big contest with a real-life European cruise trip as a major prize
                </p>
                <p className="roadmap__text">
                  -Release 3rd NFT collection &quot;European Trip&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet='roadmap-3.webp' type='image/webp' />
                  <source srcSet='roadmap-3.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src='roadmap-3.png' alt='' />
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
                  <source srcSet='roadmap-7.webp' type='image/webp' />
                  <source srcSet='roadmap-7.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src='roadmap-7.png' alt='' />
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
                  -Disturbing in-game usable NFT`s to our holders
                </p>
                <picture className='d-flex'>
                  <source srcSet='roadmap-4.webp' type='image/webp' />
                  <source srcSet='roadmap-4.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src='roadmap-4.png' alt='' />
                </picture>
              </div>
            </div>
            <picture>
              <source srcSet='roadmap-8.webp' type='image/webp' />
              <source srcSet='roadmap-8.png' type='image/png' />
              <img className='roadmap__image-1' src='roadmap-8.png' alt='' />
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
              <source srcSet='roadmap-1.webp' type='image/webp' />
              <source srcSet='roadmap-1.png' type='image/png' />
              <img className='roadmap__image-1 reveal' src='roadmap-1.png' alt='' />
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
                  <source srcSet='roadmap-2.webp' type='image/webp' />
                  <source srcSet='roadmap-2.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src='roadmap-2.png' alt='' />
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
                  <source srcSet='roadmap-3.webp' type='image/webp' />
                  <source srcSet='roadmap-3.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src='roadmap-3.png' alt='' />
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
                  <source srcSet='roadmap-4.webp' type='image/webp' />
                  <source srcSet='roadmap-4.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-l reveal' src='roadmap-4.png' alt='' />
                </picture>
              </div>
              <div className="roadmap__box-right">
                <picture>
                  <source srcSet='larry-1.webp' type='image/webp' />
                  <source srcSet='larry-1.png' type='image/png' />
                  <img className='roadmap__larry-1 reveal' src='larry-1.png' alt='' />
                </picture>
                <picture>
                  <source srcSet='larry-2.webp' type='image/webp' />
                  <source srcSet='larry-2.png' type='image/png' />
                  <img className='roadmap__larry-2 reveal' src='larry-2.png' alt='' />
                </picture>
                <picture>
                  <source srcSet='larry-3.webp' type='image/webp' />
                  <source srcSet='larry-3.png' type='image/png' />
                  <img className='roadmap__larry-3 reveal' src='larry-3.png' alt='' />
                </picture>
                <picture className='d-flex'>
                  <source srcSet='roadmap-6.webp' type='image/webp' />
                  <source srcSet='roadmap-6.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src='roadmap-6.png' alt='' />
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
                  <source srcSet='roadmap-5.webp' type='image/webp' />
                  <source srcSet='roadmap-5.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src='roadmap-5.png' alt='' />
                </picture>
                <h4 className="roadmap__title">
                  European trip
                </h4>
                <p className="roadmap__text">
                  -Forming 3rd NFT collection
                </p>
                <p className="roadmap__text">
                  -Announce our NFT usage in Larry`s metaverse
                </p>
                <p className="roadmap__text">
                  -Big contest with a real-life European cruise trip as a major prize
                </p>
                <p className="roadmap__text">
                  -Release 3rd NFT collection &quot;European Trip&quot;
                </p>
                <picture className='d-flex'>
                  <source srcSet='roadmap-7.webp' type='image/webp' />
                  <source srcSet='roadmap-7.png' type='image/png' />
                  <img className='roadmap__ava roadmap__ava-r reveal' src='roadmap-7.png' alt='' />
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
                  -Disturbing in-game usable NFT`s to our holders
                </p>
              </div>
            </div>
            <picture>
              <source srcSet='roadmap-8.webp' type='image/webp' />
              <source srcSet='roadmap-8.png' type='image/png' />
              <img className='roadmap__image-1' src='roadmap-8.png' alt='' />
            </picture>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Roadmap;
