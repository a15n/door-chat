import React, { Component } from 'react';
import './style.css';
import TextField from '../../shared/TextField/component';

class MainFooter extends Component {
  render() {
    const { updateRoomMessages } = this.props;
    // I decided to just use a TextField instead of a text field and a "Send" link because
    // it is better UI. This UI allows you to type multiple messages without having to 
    // find the mouse, hover to "Send", click "Send", hover back, and click the input.
    return (
      <div className="MainFooter">
        <div className="MainFooter-actionsContainer">
          <TextField onEnter={updateRoomMessages}/>
        </div>
      </div>
    )
  }
}

MainFooter.PropTypes = {
  updateRoomMessages: React.PropTypes.func.isRequired,
}

export default MainFooter;
