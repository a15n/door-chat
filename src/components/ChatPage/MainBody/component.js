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
    return (
      <div className='MainBody'>
        {this.props.roomMessages.map(this.renderMessage)}

        <div className="MainBody-myMessages">
          <h2 className="MainBody-myMessage">hello from me</h2>
          <h4 className="MainBody-name">Andrew</h4>
        </div>
      </div>
    )
  }

}

MainBody.propTypes = {
  roomMessages: React.PropTypes.array.isRequired,
}

export default MainBody;
