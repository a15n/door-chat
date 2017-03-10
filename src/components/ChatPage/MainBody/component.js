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
            <h2>{message.message}</h2>
            <h3>{message.name}</h3>    
        </div>
    )
  }
  render() {
    return (
      <div className='MainBody'>
        {this.props.roomMessages.map(this.renderMessage)}
      </div>
    )
  }

}

MainBody.propTypes = {
  roomMessages: React.PropTypes.array.isRequired,
}

export default MainBody;
