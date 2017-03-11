import React, { Component } from 'react';
import './style.css';

class MainHeader extends Component {
  render() {
    // show myName and theirNames
    return (
      <div className="MainHeader">
        <div className="MainHeader-roomName">
          {this.props.roomData.name}  
        </div>
        <div>
          <span className="MainHeader-myName">Andrew</span>
          <span className="MainHeader-theirNames">, foo, bar, baz</span>
        </div>
      </div>
    )
  }
}

MainHeader.propTypes = {
  roomData: React.PropTypes.object.isRequired,
}

export default MainHeader;
