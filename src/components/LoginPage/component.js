import './component.css';
import React, { Component } from 'react';

class LoginPage extends Component {
  constructor() {
    super()

    this.join = this.join.bind(this)
  }
  join() {
    this.context.router.transitionTo('/chat');
  }
  render() {
    return (
      <div className='LoginPage'>
        <div className='LoginPage-container'>
          <input type='text' placeholder='Type your username....'/>
          <hr/>
          <button onClick={this.join}>Join the DoorDash Chat!</button>
        </div>
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
}

export default LoginPage;
