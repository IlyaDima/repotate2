import React from 'react';
import HTMLFlipBook from 'react-pageflip';

import './flipbook.styles.scss';

import flipbookBackCover from '/src/assets/flipbook/back-cover.webp';
import flipbookFrontCover from '/src/assets/flipbook/front-cover.webp';
import flipbookPage1 from '/src/assets/flipbook/page-1.webp';
import flipbookPage2 from '/src/assets/flipbook/page-2.webp';
import flipbookPage3 from '/src/assets/flipbook/page-3.webp';
import flipbookPage4 from '/src/assets/flipbook/page-4.webp';
import flipbookPage5 from '/src/assets/flipbook/page-5.webp';
import flipbookPage6 from '/src/assets/flipbook/page-6.webp';
import flipbookPage7 from '/src/assets/flipbook/page-7.webp';

export default function Flipbook() {
  return (
    <section className="flipbook">
      <svg
        className="flipbook__table"
        viewBox="0 0 1920 1783"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-86.5 1774.5V36.7987L1975.5 8.61697V1774.5H-86.5Z"
          fill="#C27D3D"
          stroke="black"
          strokeWidth="17"
        />
      </svg>
      <div className="flipbook__container">
        <HTMLFlipBook width={490} height={700} showCover={true}>
          <img src={flipbookFrontCover} />
          <img src={flipbookPage1} />
          <img src={flipbookPage2} />
          <img src={flipbookPage3} />
          <img src={flipbookPage4} />
          <img src={flipbookPage5} />
          <img src={flipbookPage6} />
          <img src={flipbookPage7} />
          <img src={flipbookBackCover} />
        </HTMLFlipBook>
      </div>
    </section>
  );
}
