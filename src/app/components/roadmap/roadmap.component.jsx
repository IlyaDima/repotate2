import React from 'react';
import './roadmap.styles.scss';

import roadmapBg from 'src/assets/roadmap/roadmap-bg.webp';
import roadmapImg1 from 'src/assets/roadmap/roadmap-img-1.webp';
import roadmapImg2 from 'src/assets/roadmap/roadmap-img-2.webp';
import roadmapImg3 from 'src/assets/roadmap/roadmap-img-3.webp';
import roadmapImg4 from 'src/assets/roadmap/roadmap-img-4.webp';
import roadmapText1Bg from 'src/assets/roadmap/roadmap-text-1-bg.webp';
import roadmapText2Bg from 'src/assets/roadmap/roadmap-text-2-bg.webp';
import roadmapText3Bg from 'src/assets/roadmap/roadmap-text-3-bg.webp';
import roadmapText4Bg from 'src/assets/roadmap/roadmap-text-4-bg.webp';

export default function Roadmap() {
  return (
    <section className="roadmap">
      <img className="roadmap-bg" src={roadmapBg} alt="Roadmap" />
      <img className="roadmap-img-1" src={roadmapImg1} alt="Roadmap image 1" />
      <div className="roadmap-text-1">
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
      <img className="roadmap-img-2" src={roadmapImg2} alt="Roadmap image 2" />
      <div className="roadmap-text-2">
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
      <img className="roadmap-img-3" src={roadmapImg3} alt="Roadmap image 3" />
      <div className="roadmap-text-3">
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
            -Big contest with a real-life European cruise trip as a major prize
            <br />
            -Release 3rd NFT collection &quot;European Trip&quot;
          </p>
        </div>
      </div>
      <img className="roadmap-img-4" src={roadmapImg4} alt="Roadmap image 4" />
      <div className="roadmap-text-4">
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
    </section>
  );
}
