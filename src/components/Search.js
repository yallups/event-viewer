import React from 'react';

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
      <input
        placeholder={placeholderText}
        onMouseEnter={this.handleOnHover}
        onMouseLeave={this.handleOffHover}
      />
    )
  }
}