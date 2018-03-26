import React from 'react';

const coinImg = require('../../../../../../../../img/coin.png');

export default class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: 'tooltip',
    };
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }
  showTooltip() {
    this.setState({ isHover: 'tooltip tooltip_hover' });
  }
  hideTooltip() {
    this.setState({ isHover: 'tooltip' });
  }
  render() {
    return (
      <div
        className="coin"
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
      >
        <img src={coinImg} alt="coin" />
        <div className={this.state.isHover}>
          <div className="pointer" />
          <p>Visit this event and earn KCY tokens</p>
        </div>
      </div>
    );
  }
}
