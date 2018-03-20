import React from 'react';

const iconBell = require('../../img/notification.png');
const iconBellHover = require('../../img/notification_hover.png');

export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bellState: iconBell,
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  mouseEnter() {
    this.setState({ bellState: iconBellHover });
  }
  mouseLeave() {
    this.setState({ bellState: iconBell });
  }
  render() {
    return (
      <button className="notification">
        <img
          src={this.state.bellState}
          alt="notification"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        />
      </button>
    );
  }
}
