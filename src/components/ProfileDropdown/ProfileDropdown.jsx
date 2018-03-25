import React from 'react';
import PropTypes from 'prop-types';

const ProfileDropDown = props => (
  <ul className={props.className}>
    <li>My profile</li>
    <li>Organizer panel</li>
    <li>Buy KCY tokens</li>
    <li>Settings</li>
    <li><hr /></li>
    <li>Log out</li>
  </ul>
);

ProfileDropDown.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ProfileDropDown;
