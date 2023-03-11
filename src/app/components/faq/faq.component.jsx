import React from 'react';

import './faq.styles.scss';

import paperImg from '/src/assets/faq/paper.webp';

export default function FAQ() {
  return (
    <section className="faq">
      <img
        className="faq__img"
        src={paperImg}
        width={576}
        height={917}
        alt="A hand holding a piece of paper with questions"
      />
    </section>
  );
}
