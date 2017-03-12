import React, { Component } from 'react';
import './style.css';
import MyMessage from './MyMessage/component';

class MainBody extends Component {
  constructor() {
    super()
    this.renderMessage = this.renderMessage.bind(this);
  }
  scrollToBottom() {
    const scrollToElement = document.querySelector('.scrollToElement');
    scrollToElement.scrollIntoView({behavior: "smooth"});
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  renderMessage(messageObject, i) {
    const username = localStorage.getItem('doorChatUsername');
    let isMyMessage = messageObject.name === username;
    
    return (
      <div key={i}>
        <MyMessage message={messageObject.message} name={messageObject.name} isMyMessage={isMyMessage}/>
      </div>
    )
  }
  render() {
    const { roomMessages } = this.props;
    return (
      <div className="MainBody">
        <div className="MainBody-scrollableArea">
          {roomMessages.map(this.renderMessage)}
          <div className="scrollToElement"></div>
        </div>
      </div>
    )
  }
}

MainBody.propTypes = {
  roomMessages: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired,
}

export default MainBody;
