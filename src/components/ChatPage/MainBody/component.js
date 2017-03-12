import React, { Component } from 'react';
import './style.css';

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
  renderMessage(message, i) {
    return (
      <div key={i}>
        <h2 className="MainBody-theirMessage">{message.message}</h2>
        <h4 className="MainBody-name">{message.name}</h4>
      </div>
    )
  }
  render() {
    const { roomMessages, username } = this.props;
    return (
      <div className="MainBody">
        <div className="MainBody-scrollableArea">
          {roomMessages.map(this.renderMessage)}
          <div className="MainBody-myMessages">
            <div> {/* needed for flexbox */}
              <h2 className="MainBody-myMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas assumenda nobis voluptates placeat totam, et optio ullam, pariatur vero eveniet, accusamus minima amet repudiandae ipsa facere ea officia corporis veniam!</h2>
              <h2 className="MainBody-myMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas assumenda nobis voluptates placeat totam, et optio ullam, pariatur vero eveniet, accusamus minima amet repudiandae ipsa facere ea officia corporis veniam!</h2>
              <h4 className="MainBody-name MainBody-myName">{username}</h4>
            </div>
          </div>
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
