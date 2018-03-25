import React from 'react';
import PropTypes from 'prop-types';

const like = require('../../img/like.png');

export default class Poster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ liked: !this.state.liked });
  }
  render() {
    return (
      <div
        className="poster"
        style={{ backgroundImage: `url(${this.props.src})` }}
        onDoubleClick={this.handleClick}
      >
        <section className="posterHead">
          <h5>{this.props.date}</h5>
          <div className="bonuses">
            {this.props.isFree}
            {this.props.isCoin}
          </div>
        </section>
        <section className="description">
          <div>
            <h3>{this.props.tittle}</h3>
            <p>{this.props.typeEvent}</p>
          </div>
          <img className={this.state.liked ? 'like liked' : 'like'} src={like} alt="like" />
        </section>
      </div>
    );
  }
}

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isFree: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
  isCoin: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
  tittle: PropTypes.string.isRequired,
  typeEvent: PropTypes.string.isRequired,
};
