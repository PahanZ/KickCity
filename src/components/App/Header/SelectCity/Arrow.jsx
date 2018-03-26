import React from 'react';
import Proptypes from 'prop-types';

const Arrow = props => (
  <img src={props.src} className="arrow" alt="arrow" />
);

Arrow.propTypes = {
  src: Proptypes.string.isRequired,
};

export default Arrow;
