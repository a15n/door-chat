import React, { Component } from 'react';
import './style.css';

class Message extends Component {
  render() {
    const { message, name, isUserMessage } = this.props;
    return (
      <div className={"MessageComponent" + (isUserMessage ? ' isUserMessage' : '')}>
        <div className="MessageComponent-elementContainer">
          <span className="MessageComponent-message">{message}</span>
        </div>
        <div className="MessageComponent-elementContainer">
          <span className="MessageComponent-name MainBody-myName">{name}</span>
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  message: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
}

export default Message;
