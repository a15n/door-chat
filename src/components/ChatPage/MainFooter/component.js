import React, { Component } from 'react';
import './style.css';
import TextField from '../../shared/TextField/component';

class MainFooter extends Component {
  render() {
    const { updateRoomMessages } = this.props;
    return (
      <div className="MainFooter">
        <div className="MainFooter-actionsContainer">
          <TextField onSubmit={updateRoomMessages}/>
        </div>
      </div>
    )
  }
}

// TODO explain "send" vs `press enter` decision

MainFooter.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired,
}

export default MainFooter;
