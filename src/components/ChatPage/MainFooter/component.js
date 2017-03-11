import React, { Component } from 'react';
import './style.css';

class MainFooter extends Component {
  render() {
    return (
      <div className="MainFooter">
        <div className="MainFooter-actionsContainer">
          <input className="MainFooter-input" type="text"/>
          <a href className="MainFooter-send">Send</a>    
        </div>
      </div>
    )
  }
}

export default MainFooter;
