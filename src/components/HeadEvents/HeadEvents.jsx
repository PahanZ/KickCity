import React from 'react';

const pathToImg = require('../../img/fire.png');

export default () => (
  <section className="headEvents">
    <h2>Trending events</h2>
    <img src={pathToImg} alt="fire" />
  </section>
);
