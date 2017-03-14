import React, { Component } from 'react';
import './style.css';

class MainHeader extends Component {
  renderTheirNames(name, i) {
    return <span className="MainHeader-theirNames" key={i}>, {name}</span>
  }
  render() {
    const { username, roomData } = this.props;
    const theirNames = roomData.users || [];
    
    return (
      <div className="MainHeader">
        <div> {/* div needed for parent's `display: flex;` */}
          <div className="MainHeader-roomName">
            <h2 className="u-fontWeight--300 u-marginVertical--sm">{roomData.name || '-'}</h2>
          </div>
          <div>
            <span className="MainHeader-myName">{username}</span>
            {theirNames.map(this.renderTheirNames)}
          </div>
        </div>
      </div>
    )
  }
}

MainHeader.propTypes = {
  roomData: React.PropTypes.object.isRequired,
  username: React.PropTypes.string.isRequired,
}

export default MainHeader;
