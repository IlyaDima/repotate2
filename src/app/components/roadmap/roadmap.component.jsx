import React from 'react';
import './roadmap.styles.scss';

import roadmapImg from 'src/assets/roadmapNew.webp';

export default function Roadmap() {
  return (
    <section className="roadmap">
      <img className="roadmap__img" src={roadmapImg} alt="Roadmap" />
    </section>
  );
}
