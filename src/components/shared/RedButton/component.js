import React, { Component } from 'react';
import './style.css';

class RedButton extends Component {
  render() {
    const { text, onClick, className } = this.props;
    return (
      <button className={"RedButton " + className} onClick={onClick}>{text}</button>
    )
  }
}

RedButton.PropTypes = {
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default RedButton;
