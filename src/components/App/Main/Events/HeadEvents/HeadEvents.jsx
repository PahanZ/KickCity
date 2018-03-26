import React from 'react';

const pathToImg = require('../../../../../img/fire.png');
const arrowMore = require('../../../../../img/arrow_more.png');

export default () => (
  <section className="headEvents">
    <div>
      <h2>Trending events</h2>
      <img src={pathToImg} alt="fire" />
    </div>
    <div>More
      <a href="#">
        <img src={arrowMore} alt="more" />
      </a>
    </div>

  </section>
);
