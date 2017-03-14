import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';
import { toRoomUrl } from '../utils';
import OnlineMinutes from './OnlineMinutes/component'

class SideBar extends Component {
  constructor() {
    super();
    this.renderRoomLink = this.renderRoomLink.bind(this);
  }

  renderRoomLink(room, i) {
    const { currentRoom } = this.props;
    const roomUrl = toRoomUrl(room.name);
    return (
      <Link 
        className={"SideBar-room" + (room === currentRoom ? ' active' : '')}
        to={roomUrl}
        key={i} 
      >
        {room.name}
      </Link>
    )
  }

  render() {
    const { username, rooms } = this.props;
    return (
      <div className="SideBar">
        <div className="SideBar-info">
          <h3 className="SideBar-username">{username}</h3>
          <OnlineMinutes/>
        </div>
        {rooms.map(this.renderRoomLink)}
      </div>
    )
  }
}

SideBar.propTypes = {
  rooms: React.PropTypes.array.isRequired,
  currentRoom: React.PropTypes.object.isRequired,
  username: React.PropTypes.string.isRequired,
}

export default SideBar;
