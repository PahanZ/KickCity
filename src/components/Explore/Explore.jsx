import React from 'react';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: 'hr',
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  mouseEnter() {
    this.setState({ isHover: 'hr hr_hover' });
  }
  mouseLeave() {
    this.setState({ isHover: 'hr' });
  }
  render() {
    return (
      <div className="select_explores_wrap">
        <button
          className="select"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >Explore
          <hr className={this.state.isHover} />
        </button>
      </div>
    );
  }
}
