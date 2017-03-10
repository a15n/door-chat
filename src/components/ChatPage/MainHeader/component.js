import React, { Component } from 'react';
import './style.css';

class MainHeader extends Component {
  render() {
    return (
      <div className="MainHeader">
        MainHeader -
        {this.props.roomData.name}
      </div>
    )
  }
}

MainHeader.propTypes = {
  roomData: React.PropTypes.object.isRequired,
}

export default MainHeader;
