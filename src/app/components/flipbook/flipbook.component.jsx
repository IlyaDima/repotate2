import React from 'react';
import HTMLFlipBook from 'react-pageflip';

import './flipbook.styles.scss';

import flipbookPageCover from '/src/assets/flipbook/cover.webp';
import flipbookPage1 from '/src/assets/flipbook/page-1.webp';
import flipbookPage2 from '/src/assets/flipbook/page-2.webp';
import flipbookPage3 from '/src/assets/flipbook/page-3.webp';
import flipbookPage4 from '/src/assets/flipbook/page-4.webp';
import flipbookPage5 from '/src/assets/flipbook/page-5.webp';
import flipbookPage6 from '/src/assets/flipbook/page-6.webp';
import flipbookPage7 from '/src/assets/flipbook/page-7.webp';
import flipbookPage8 from '/src/assets/flipbook/page-8.webp';

export default function Flipbook() {
  return (
    <section className="flipbook">
      <HTMLFlipBook
        width={560}
        height={800}
        minWidth={245}
        minHeight={350}
        maxWidth={560}
        maxHeight={800}
        size="stretch"
        showCover={true}
      >
        <img src={flipbookPageCover} />
        <img src={flipbookPage1} />
        <img src={flipbookPage2} />
        <img src={flipbookPage3} />
        <img src={flipbookPage4} />
        <img src={flipbookPage5} />
        <img src={flipbookPage6} />
        <img src={flipbookPage7} />
        <img src={flipbookPage8} />
      </HTMLFlipBook>
    </section>
  );
}
