import React, { Component } from 'react';

class HomePage extends Component {
  constructor() {
    super()

    this.login = this.login.bind(this)
  }

  login() {
    this.context.router.transitionTo('login');
  }

  render() {
    return (
      <div>
        Login
        <button onClick={this.login}>login</button>
      </div>
    );
  }
}

HomePage.contextTypes = {
  router: React.PropTypes.object
}

export default HomePage;
