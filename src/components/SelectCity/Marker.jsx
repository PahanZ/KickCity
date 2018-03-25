import React from 'react';
import Proptypes from 'prop-types';

const Marker = props => (
  <img src={props.src} alt="marker" />
);

Marker.propTypes = {
  src: Proptypes.string.isRequired,
};

export default Marker;
