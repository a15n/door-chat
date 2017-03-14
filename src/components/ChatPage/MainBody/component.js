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
    if (scrollToElement) {
      scrollToElement.scrollIntoView({behavior: "smooth"});  
    }
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  renderMessage(messageObject, i) {
    const { username } = this.props;
    let isUserMessage = messageObject.name === username;
    
    return (
      <MyMessage key={i} message={messageObject.message} name={messageObject.name} isUserMessage={isUserMessage}/>
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
