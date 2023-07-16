import clsx from 'clsx';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import './roadmap.styles.scss';

import roadmapBgMobile from 'src/assets/roadmap/roadmap-bg-mobile.webp';
import roadmapBg from 'src/assets/roadmap/roadmap-bg.webp';
import roadmapImg1 from 'src/assets/roadmap/roadmap-img-1.webp';
import roadmapImg2 from 'src/assets/roadmap/roadmap-img-2.webp';
import roadmapImg3 from 'src/assets/roadmap/roadmap-img-3.webp';
import roadmapImg4 from 'src/assets/roadmap/roadmap-img-4.webp';
import roadmapMovingObject from 'src/assets/roadmap/roadmap-moving-object.webp';
import roadmapText1Bg from 'src/assets/roadmap/roadmap-text-1-bg.webp';
import roadmapText2Bg from 'src/assets/roadmap/roadmap-text-2-bg.webp';
import roadmapText3Bg from 'src/assets/roadmap/roadmap-text-3-bg.webp';
import roadmapText4Bg from 'src/assets/roadmap/roadmap-text-4-bg.webp';

export default function Roadmap() {
  const { ref: roadmapImg1Ref, inView: roadmapImg1InView } = useInView({
    rootMargin: '0px 0px -40% 0px',
    threshold: 0,
    triggerOnce: true,
  });

  const { ref: roadmapImg2Ref, inView: roadmapImg2InView } = useInView({
    rootMargin: '0px 0px -40% 0px',
    threshold: 0,
    triggerOnce: true,
  });

  const { ref: roadmapImg3Ref, inView: roadmapImg3InView } = useInView({
    rootMargin: '0px 0px -40% 0px',
    threshold: 0,
    triggerOnce: true,
  });

  const { ref: roadmapImg4Ref, inView: roadmapImg4InView } = useInView({
    rootMargin: '0px 0px -40% 0px',
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="roadmap">
      <div className="roadmap-moving-object-container">
        <img
          className="roadmap-moving-object"
          src={roadmapMovingObject}
          alt="Roadmap moving object"
        />
      </div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <picture>
          <source srcSet={roadmapBg} media="(min-width: 768px)" />
          <img className="roadmap-bg" src={roadmapBgMobile} alt="Roadmap" />
        </picture>

        <img
          ref={roadmapImg1Ref}
          className={clsx('roadmap-img-1 fade-in', { show: roadmapImg1InView })}
          src={roadmapImg1}
          alt="Roadmap image 1"
        />
        <div
          className={clsx('roadmap-text-1 fade-in-left', {
            show: roadmapImg1InView,
          })}
        >
          <img
            className="roadmap-text-bg"
            src={roadmapText1Bg}
            alt="Roadmap text 1 bg"
          />
          <div className="roadmap-text-1-content">
            <h3 className="roadmap-heading">Office story</h3>
            <p className="roadmap-text">
              -Forming the project’s vision
              <br />
              -Building strong and active community
              <br />
              -Making a list of our early supporters
              <br />
              -1st NFT collection &quot;Larry in the office&quot;
            </p>
          </div>
        </div>
        <img
          ref={roadmapImg2Ref}
          className={clsx('roadmap-img-2 fade-in', { show: roadmapImg2InView })}
          src={roadmapImg2}
          alt="Roadmap image 2"
        />
        <div
          className={clsx('roadmap-text-2 fade-in-right', {
            show: roadmapImg2InView,
          })}
        >
          <img
            className="roadmap-text-bg"
            src={roadmapText2Bg}
            alt="Roadmap text 2 bg"
          />
          <div className="roadmap-text-2-content">
            <h3 className="roadmap-heading">African trip</h3>
            <p className="roadmap-text">
              -Forming 2nd NFT collection
              <br />
              -Announce some valuable benefits for our holders
              <br />
              -Make some extra collaborations and contests
              <br />
              -Release 2nd NFT collection &quot;African Trip&quot;
            </p>
          </div>
        </div>
        <img
          ref={roadmapImg3Ref}
          className={clsx('roadmap-img-3 fade-in', { show: roadmapImg3InView })}
          src={roadmapImg3}
          alt="Roadmap image 3"
        />
        <div
          className={clsx('roadmap-text-3 fade-in-left', {
            show: roadmapImg3InView,
          })}
        >
          <img
            className="roadmap-text-bg"
            src={roadmapText3Bg}
            alt="Roadmap text 3 bg"
          />
          <div className="roadmap-text-3-content">
            <h3 className="roadmap-heading">European trip</h3>
            <p className="roadmap-text">
              -Forming 3rd NFT collection
              <br />
              -Announce our NFT usage in Larry’s metaverse
              <br />
              -Big contest with a real-life European cruise trip as a major
              prize
              <br />
              -Release 3rd NFT collection &quot;European Trip&quot;
            </p>
          </div>
        </div>
        <img
          ref={roadmapImg4Ref}
          className={clsx('roadmap-img-4 fade-in', { show: roadmapImg4InView })}
          src={roadmapImg4}
          alt="Roadmap image 4"
        />
        <div
          className={clsx('roadmap-text-4 fade-in-right', {
            show: roadmapImg4InView,
          })}
        >
          <img
            className="roadmap-text-bg"
            src={roadmapText4Bg}
            alt="Roadmap text 4 bg"
          />
          <div className="roadmap-text-4-content">
            <h3 className="roadmap-heading">Asian trip</h3>
            <p className="roadmap-text">
              -Forming 4th NFT collection
              <br />
              -Announce our P2E metaverse
              <br />
              -Making a private community of supporters and holders
              <br />
              -Release 4th NFT collection &quot;Asian trip&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
