import React, { Component } from 'react';
import './style.css';
import TextField from '../../shared/TextField/component';

class MainFooter extends Component {
  render() {
    const { updateRoomMessages } = this.props;
    return (
      <div className="MainFooter">
        <div className="MainFooter-actionsContainer">
          <TextField onChange={() => {}} onSubmit={updateRoomMessages}/>
          <a href className="MainFooter-send">Send</a>    
        </div>
      </div>
    )
  }
}

MainFooter.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired,
}

export default MainFooter;
