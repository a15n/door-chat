import React, { Component } from 'react';
import './style.css';

class Message extends Component {
  render() {
    const { message, name, isUserMessage } = this.props;
    return (
      <div className={"MessageComponent" + (isUserMessage ? ' isUserMessage' : '')}>
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

Message.propTypes = {
  message: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
}

export default Message;
