import React from 'react';
import Marker from './Marker';
import Arrow from './Arrow';

const marker = require('../../img/marker.png');
const markerActive = require('../../img/marker_active.png');
const arrow = require('../../img/arrow.png');
const arrowActive = require('../../img/arrow_active.png');

export default class SelectCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPath: marker,
      classnameDropDown: 'dropdown',
      selectValue: 'Houston',
      arrowPath: arrow,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      markerPath: this.state.markerPath === marker
        ? markerActive
        : marker,
      classnameDropDown: this.state.classnameDropDown === 'dropdown'
        ? 'dropdown open'
        : 'dropdown',
      arrowPath: this.state.arrowPath === arrow
        ? arrowActive
        : arrow,
    });
    if (event.target.closest('li')) this.setState({ selectValue: event.target.textContent });
  }
  render() {
    return (
      <div className="select_city_wrap">
        <Marker src={this.state.markerPath} />
        <button
          className="select"
          onClick={this.handleClick}
        >{this.state.selectValue}
          <ul className={this.state.classnameDropDown}>
            <li>Houston</li>
            <li>Moscow</li>
            <li>Saint-Petersburg</li>
            <li>Helsinki</li>
            <li>Toronto</li>
            <li>Dubai</li>
          </ul>
          <Arrow src={this.state.arrowPath} />
        </button>
      </div>
    );
  }
}

