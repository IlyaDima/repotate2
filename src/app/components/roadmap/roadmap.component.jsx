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
            <img className='roadmap__image-1 reveal' src="roadmap1.png" />
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
                <img src="roadmap6.png" className="roadmap__ava roadmap__ava-l reveal" />
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
                <img src="roadmap2.png" className="roadmap__ava roadmap__ava-r reveal" />
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
                <img src="roadmap5.png" className="roadmap__ava roadmap__ava-l reveal" />
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
                <img src="roadmap3.png" className="roadmap__ava roadmap__ava-r reveal" />
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
                <img src="roadmap7.png" className="roadmap__ava roadmap__ava-l reveal" />
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
                <img src="roadmap4.png" className="roadmap__ava roadmap__ava-r reveal" />
              </div>
            </div>
            <img className='roadmap__image-1' src="roadmap8.png" />
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
            <img className='roadmap__image-1 reveal' src="roadmap1.png" />
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
                <img src="roadmap2.png" className="roadmap__ava roadmap__ava-l reveal" />
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
                <img src="roadmap3.png" className="roadmap__ava roadmap__ava-l reveal" />
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
                <img src="roadmap4.png" className="roadmap__ava roadmap__ava-l reveal" />
              </div>
              <div className="roadmap__box-right">
                <img className="roadmap__larry-1 reveal" src="larry1.png" />
                <img className="roadmap__larry-2 reveal" src="larry2.png" />
                <img className="roadmap__larry-3 reveal" src="larry3.png" />
                <img src="roadmap6.png" className="roadmap__ava roadmap__ava-r reveal" />
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
                <img src="roadmap5.png" className="roadmap__ava roadmap__ava-r reveal" />
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
                <img src="roadmap7.png" className="roadmap__ava roadmap__ava-r reveal" />
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
            <img className='roadmap__image-1' src="roadmap8.png" />
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Roadmap;
