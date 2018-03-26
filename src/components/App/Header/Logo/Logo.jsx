import React from 'react';
import './styles.css';

const img = require('../../../../img/logo.png');

export default () => (
  <div className="logoWrap">
    <img className="logo" src={img} alt="logo" />
  </div>
);
