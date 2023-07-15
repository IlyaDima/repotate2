import PropTypes from 'prop-types';
import React from 'react';

import './welcome.styles.scss';

import arm from '/src/assets/parallax/arm.png';
import larry from '/src/assets/parallax/larry.png';
import office from '/src/assets/parallax/office.png';
import table from '/src/assets/parallax/table.png';
import textBubble from '/src/assets/parallax/text-bubble.png';

Welcome.propTypes = {
  coffeeRef: PropTypes.object,
};

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="frame">
        <img className="office" src={office} alt="" />
        <img className="larry" src={larry} alt="" />
        <img className="arm" src={arm} alt="" />
        <img className="table" src={table} alt="" />
        <div
          className="text-bubble"
          style={{ backgroundImage: `url(${textBubble})` }}
        >
          <p>
            GM Travellers
            <br />
            How are you doing?
          </p>
        </div>
      </div>
    </section>
  );
}
