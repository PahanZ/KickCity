import React from 'react';
import './styles.css';
import Marker from '../Marker';

const marker = require('../../img/marker.png');
const markerActive = require('../../img/marker_active.png');

export default class SelectCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPath: marker,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      markerPath: this.state.markerPath === marker
        ? markerActive
        : marker,
    });
  }
  render() {
    return (
      <div className="select_city_wrap">
        <Marker src={this.state.markerPath} />
        <select
          className="select_city"
          onMouseDown={this.handleClick}
        >
          {/* <div className="select_city"> */}
          <option value="Houston">Houston</option>
          <option value="Moscow">Moscow</option>
          <option value="Saint-Petersburg">Saint-Petersburg</option>
          <option value="Helsinki">Helsinki</option>
          <option value="Toronto">Toronto</option>
          <option value="Dubai">Dubai</option>
          {/* </div> */}
        </select>
      </div>
    );
  }
}

