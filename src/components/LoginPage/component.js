import React, { Component } from 'react';
import TextField from '../shared/TextField/component';
import RedButton from '../shared/RedButton/component';
import './component.css';

class LoginPage extends Component {
  constructor() {
    super()

    this.state = {
      loginPageHasError: false,
    }
    
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
      this.setState({loginPageHasError: false});
      this.context.router.transitionTo('/chat/tea-chats');
    } else {
      this.setState({loginPageHasError: true});
    }
  }
  
  render() {
    const username = localStorage.getItem('doorChatUsername') || '';
    const { loginPageHasError } = this.state;
    return (
      <div className='LoginPage'>
        <div className='LoginPage-container'>
          <TextField 
            placeholder='Type your username...' 
            onEnter={this.validateAndEnter} 
            onKeyUp={this.updateUsername}
            value={username}
          />
          {loginPageHasError ? (<div className='LoginPage-error u-marginTop--md'>Add a username</div>) : ''}
          <RedButton className='u-marginTop--md' text="Join the DoorDash Chat" onClick={this.validateAndEnter}/>
        </div>
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
}

export default LoginPage;
