import React from 'react';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';

const img = require('../../../../img/avatar.png');

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropownClass: 'profileDropdown',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      dropownClass: this.state.dropownClass === 'profileDropdown'
        ? 'profileDropdown profileDropdown_open'
        : 'profileDropdown',
    });
  }
  render() {
    return (
      <div className="profile">
        <p className="digits">0.0027</p>
        <p className="KCY">KCY</p>
        <button
          className="select"
          onClick={this.handleClick}
        >
          <img
            className="photo"
            src={img}
            alt="avatar"
          />
        </button>
        <ProfileDropdown className={this.state.dropownClass} />
      </div>
    );
  }
}
