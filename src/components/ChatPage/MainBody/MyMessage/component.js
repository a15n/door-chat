import React, { Component } from 'react';
import './style.css';

class MyMessage extends Component {
  // <div className={"MainBody-" + (isMyMessage ? 'myMessage' : 'theirMessage')}>
  // <h4 className="MessageComponent-name MainBody-myName">{name}</h4>
  render() {
    const { message, name, isMyMessage } = this.props;
    return (
      <div className={"MessageComponent" + (isMyMessage ? ' isMyMessage' : '')}>
        <div className="MessageComponent-elementContainer">
          <h2 className="MessageComponent-message">{message}</h2>
        </div>
        <div className="MessageComponent-elementContainer">
          <h4 className="MessageComponent-name MainBody-myName">{name}</h4>
        </div>
      </div>
    )
  }
}

MyMessage.propTypes = {
  message: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
}

export default MyMessage;
