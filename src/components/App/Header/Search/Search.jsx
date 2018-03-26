import React, { Fragment } from 'react';

const searchIcon = require('../../../../img/search.png');
const searchIconActive = require('../../../../img/search_active.png');

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: searchIcon,
      formIsOpen: 'search_Form',
      btnClass: 'btn_icon_search',
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.showSearchForm = this.showSearchForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }
  mouseEnter() {
    this.setState({ src: searchIconActive });
  }
  mouseLeave() {
    this.setState({ src: searchIcon });
  }
  showSearchForm() {
    this.setState({
      formIsOpen: 'search_Form search_Form_Open',
      btnClass: 'hide',
    });
  }
  closeForm(event) {
    event.preventDefault();
    this.setState({
      formIsOpen: 'search_Form',
      btnClass: 'btn_icon_search',
    });
  }
  render() {
    return (
      <Fragment>
        <button
          className={this.state.btnClass}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onClick={this.showSearchForm}
        >
          <img
            src={this.state.src}
            alt="search_Icon"
          />
        </button>
        <form
          className={this.state.formIsOpen}
        >
          <input className="input_search" type="text" placeholder="Example: Radiohead" />
          <button className="search">Search</button>
          <button
            className="close"
            onClick={this.closeForm}
          >&times;
          </button>
        </form>
      </Fragment>
    );
  }
}
