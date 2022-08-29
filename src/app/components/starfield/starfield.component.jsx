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
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 0 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/0.webp' type='image/webp' />
            <source srcSet='/legendary/0.png' type='image/png' />
            <img src='/legendary/0.png' alt='NFT 1101' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 1 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/1.webp' type='image/webp' />
            <source srcSet='/legendary/1.png' type='image/png' />
            <img src='/legendary/1.png' alt='NFT 1102' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 2 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/2.webp' type='image/webp' />
            <source srcSet='/legendary/2.png' type='image/png' />
            <img src='/legendary/2.png' alt='NFT 1103' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 3 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/3.webp' type='image/webp' />
            <source srcSet='/legendary/3.png' type='image/png' />
            <img src='/legendary/3.png' alt='NFT 1104' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 4 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/4.webp' type='image/webp' />
            <source srcSet='/legendary/4.png' type='image/png' />
            <img src='/legendary/4.png' alt='NFT 1105' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 5 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/5.webp' type='image/webp' />
            <source srcSet='/legendary/5.png' type='image/png' />
            <img src='/legendary/5.png' alt='NFT 1106' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 6 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/6.webp' type='image/webp' />
            <source srcSet='/legendary/6.png' type='image/png' />
            <img src='/legendary/6.png' alt='NFT 1107' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 7 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/7.webp' type='image/webp' />
            <source srcSet='/legendary/7.png' type='image/png' />
            <img src='/legendary/7.png' alt='NFT 1108' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 8 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/8.webp' type='image/webp' />
            <source srcSet='/legendary/8.png' type='image/png' />
            <img src='/legendary/8.png' alt='NFT 1109' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 9 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/9.webp' type='image/webp' />
            <source srcSet='/legendary/9.png' type='image/png' />
            <img src='/legendary/9.png' alt='NFT 1110' />
          </picture>
          <picture
            className={`
            starfield-current-img
            ${selectedColonialist === 10 ? 'starfield-current-img--visible' : ''}
          `}>
            <source srcSet='/legendary/10.webp' type='image/webp' />
            <source srcSet='/legendary/10.png' type='image/png' />
            <img src='/legendary/10.png' alt='NFT 1111' />
          </picture>
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
