import React from 'react';
// import axios from 'axios';

const img = require('../../img/avatar.png');

export default class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: '',
  //   };
  // }
  componentDidMount() {
    // axios.get('../../profiles/profiles.json')
    //   .then((response) => {
    //     this.setState({ user: response });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  render() {
    return (
      <div className="profile">
        <p className="digits">0.0027</p>
        <p className="KCY">KCY</p>
        <img className="photo" src={img} alt="" />
      </div>
    );
  }
}
