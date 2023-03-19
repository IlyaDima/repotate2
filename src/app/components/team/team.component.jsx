import React from 'react';

import './team.styles.scss';

import teamImg from '/src/assets/team.webp';

export default function Team() {
  return (
    <section className="team">
      <img
        src={teamImg}
        width={2049}
        height={987}
        alt="Board of team members"
      />
    </section>
  );
}
