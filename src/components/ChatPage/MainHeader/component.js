import React, { Component } from 'react';
import './style.css';

class MainHeader extends Component {
  render() {
    // TODO show myName and theirNames
    return (
      <div className="MainHeader">
        <div>
          <div className="MainHeader-roomName">
            <h3>{this.props.roomData.name || '-'}</h3>
          </div>
          <div>
            <span className="MainHeader-myName">Andrew</span>
            <span className="MainHeader-theirNames">, foo, bar, baz</span>
          </div>
        </div>
      </div>
    )
  }
}

MainHeader.propTypes = {
  roomData: React.PropTypes.object.isRequired,
}

export default MainHeader;
