import React from 'react';

import './Search.css'

const basePlaceholderText = 'Search';

export default class Search extends React.PureComponent {
  state = {
    placeholderText: basePlaceholderText
  };

  handleOnHover = () => {
    let postFix = '';

    this.interval = setInterval(() => {
      postFix += '.';
      this.setState({
        placeholderText: basePlaceholderText + postFix
      });
    }, 400);
  };

  handleOffHover = () => {
    clearInterval(this.interval);
    this.setState({
      placeholderText: basePlaceholderText
    });
  };

  render() {
    const { placeholderText } = this.state;

    return (
      <input className={'search-input'}
        placeholder={placeholderText}
        onMouseEnter={this.handleOnHover}
        onMouseLeave={this.handleOffHover}
      />
    )
  }
}