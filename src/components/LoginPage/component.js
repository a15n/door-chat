import React, { Component } from 'react';
import TextField from '../shared/TextField/component';
import './component.css';

class LoginPage extends Component {
  constructor() {
    super()
    
    this.updateUsername = this.updateUsername.bind(this);
    this.validateAndEnter = this.validateAndEnter.bind(this);
  }

  // custom funcs
  updateUsername(username) {
    localStorage.setItem('doorChatUsername', username);
  }
  validateAndEnter() {
    const username = localStorage.getItem('doorChatUsername');
    if (username && username.length) {
      this.context.router.transitionTo('/chat/tea-chats');
    } else {
      console.warn('please provide a username');
    }
  }
  
  render() {
    const username = localStorage.getItem('doorChatUsername') || '';
    return (
      <div className='LoginPage'>
        <div className='LoginPage-container'>
          <TextField 
            placeholder='Type your username...' 
            onSubmit={this.validateAndEnter} 
            onChange={this.updateUsername}
            value={username}
          />
          <hr/>
          <button onClick={this.validateAndEnter}>Join the DoorDash chat!</button>
        </div>
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
}

export default LoginPage;
