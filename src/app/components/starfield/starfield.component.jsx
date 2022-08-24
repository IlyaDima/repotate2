import React from 'react';
import Slider from 'react-slick';
import useMediaHook from '../../hooks/media.hook';

import './starfield.styles.scss';

const Starfield = () => {
  const [selectedColonialist, setSelectedColonialist] = React.useState(0);

  const { isMobile, isTablet, isAvgDesktop } = useMediaHook();

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: (isMobile && 1) || (isTablet && 2) || (isAvgDesktop && 3) || 4,
    slidesToScroll: (isMobile && 1) || (isTablet && 2) || (isAvgDesktop && 3) || 4,
    beforeChange: (_, newIndex) => {
      if (isMobile) {
        setSelectedColonialist(newIndex + 1);
      }
    },
    dots: !isMobile && !isTablet,
  };

  return (
    <div className='starfield'>
      <div className='starfield-wrapper'>
        <div className='starfield-current'>
          {[...Array(11)].map((x, i) =>
            <img
              key={i}
              className={`
                starfield-current-img
                ${selectedColonialist === i ? 'starfield-current-img--visible' : ''}
              `}
              src={`/legendary/${i}.png`}
              alt={`Game ${i}`}
            />
          )}
        </div>
      </div>
      <div className='starfield-slider'>
        <div className='starfield-slider-wrapper'>
          <Slider {...settings}>
            {[...Array(11)].map((x, i) =>
              <div key={i} onClick={() => setSelectedColonialist(i)}>
                <picture>
                  <source srcSet={`/legendary/${i}.webp`} type='image/webp' />
                  <source srcSet={`/legendary/${i}.png`} type='image/png' />
                  <img src={`/legendary/${i}.png`} alt={`Slider ${i}`} />
                </picture>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Starfield;
