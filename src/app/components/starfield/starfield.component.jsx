import React from 'react';
import Slider from 'react-slick';
import useMediaHook from '../../hooks/media.hook';

import './starfield.styles.scss';

const Starfield = () => {
  const [selectedColonialist, setSelectedColonialist] = React.useState(1);

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
          <img
            src='/legendary/1101.png'
            alt='game 1'
            className={`
              starfield-current-img
              ${selectedColonialist === 1 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1102.png'
            alt='game 2'
            className={`
              starfield-current-img
              ${selectedColonialist === 2 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1103.png'
            alt='game 3'
            className={`
              starfield-current-img
              ${selectedColonialist === 3 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1104.png'
            alt='game 4'
            className={`
              starfield-current-img
              ${selectedColonialist === 4 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1105.png'
            alt='game 5'
            className={`
              starfield-current-img
              ${selectedColonialist === 5 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1106.png'
            alt='game 6'
            className={`
              starfield-current-img
              ${selectedColonialist === 6 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1107.png'
            alt='game 7'
            className={`
              starfield-current-img
              ${selectedColonialist === 7 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1108.png'
            alt='game 8'
            className={`
              starfield-current-img
              ${selectedColonialist === 8 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1109.png'
            alt='game 9'
            className={`
              starfield-current-img
              ${selectedColonialist === 9 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1110.png'
            alt='game 10'
            className={`
              starfield-current-img
              ${selectedColonialist === 10 ? 'starfield-current-img--visible' : ''}
            `}
          />
          <img
            src='/legendary/1111.png'
            alt='game 11'
            className={`
              starfield-current-img
              ${selectedColonialist === 11 ? 'starfield-current-img--visible' : ''}
            `}
          />
        </div>
      </div>
      <div className='starfield-slider'>
        <div className='starfield-slider-wrapper'>
          <Slider {...settings}>
            <div onClick={() => setSelectedColonialist(1)}>
              <img src='/legendary/1101.png' alt='slider 1' />
            </div>
            <div onClick={() => setSelectedColonialist(2)}>
              <img src='/legendary/1102.png' alt='slider 2' />
            </div>
            <div onClick={() => setSelectedColonialist(3)}>
              <img src='/legendary/1103.png' alt='slider 3' />
            </div>
            <div onClick={() => setSelectedColonialist(4)}>
              <img src='/legendary/1104.png' alt='slider 4' />
            </div>
            <div onClick={() => setSelectedColonialist(5)}>
              <img src='/legendary/1105.png' alt='slider 5' />
            </div>
            <div onClick={() => setSelectedColonialist(6)}>
              <img src='/legendary/1106.png' alt='slider 6' />
            </div>
            <div onClick={() => setSelectedColonialist(7)}>
              <img src='/legendary/1107.png' alt='slider 7' />
            </div>
            <div onClick={() => setSelectedColonialist(8)}>
              <img src='/legendary/1108.png' alt='slider 8' />
            </div>
            <div onClick={() => setSelectedColonialist(9)}>
              <img src='/legendary/1109.png' alt='slider 9' />
            </div>
            <div onClick={() => setSelectedColonialist(10)}>
              <img src='/legendary/1110.png' alt='slider 10' />
            </div>
            <div onClick={() => setSelectedColonialist(11)}>
              <img src='/legendary/1111.png' alt='slider 11' />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Starfield;
