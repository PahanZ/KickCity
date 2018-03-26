import React from 'react';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: 'dropdown',
      isHover: 'hr',
    };
    this.handleClick = this.handleClick.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  handleClick() {
    this.setState({
      isOpen: this.state.isOpen === 'dropdown'
        ? 'dropdown dropdown_open'
        : 'dropdown',
    });
  }
  mouseEnter() {
    this.setState({ isHover: 'hr hr_hover' });
  }
  mouseLeave() {
    this.setState({ isHover: 'hr' });
  }
  render() {
    return (
      <div className="select_categories_wrap">
        <button
          className="select"
          onClick={this.handleClick}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >Categories
          <hr className={this.state.isHover} />
        </button>
        <ul className={this.state.isOpen}>
          <li><a href="#">Conserts</a></li>
          <li><a href="#">Art</a></li>
          <li><a href="#">Festivals</a></li>
          <li><a href="#">Theatre</a></li>
          <li><a href="#">Nightlife</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Party</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Fashion</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">Meetups</a></li>
        </ul>
      </div>
    );
  }
}
