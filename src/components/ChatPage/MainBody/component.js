import React, { Component } from 'react';
import './style.css';

class MainBody extends Component {
  constructor() {
    super()
    this.renderMessage = this.renderMessage.bind(this);
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
    // TODO make sure it begins at the bottom of the scrollable area
    return (
      <div className='MainBody'>
        {this.props.roomMessages.map(this.renderMessage)}
        <div className="MainBody-myMessages">
          <div>
            <h2 className="MainBody-myMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas assumenda nobis voluptates placeat totam, et optio ullam, pariatur vero eveniet, accusamus minima amet repudiandae ipsa facere ea officia corporis veniam!</h2>
            <h2 className="MainBody-myMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas assumenda nobis voluptates placeat totam, et optio ullam, pariatur vero eveniet, accusamus minima amet repudiandae ipsa facere ea officia corporis veniam!</h2>
            <h4 className="MainBody-name MainBody-myName">Andrew</h4>
          </div>
        </div>
      </div>
    )
  }

}

MainBody.propTypes = {
  roomMessages: React.PropTypes.array.isRequired,
}

export default MainBody;
