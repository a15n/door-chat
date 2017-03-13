import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';
import OnlineMinutes from './OnlineMinutes/component'

class SideBar extends Component {
  constructor() {
    super();
    this.renderRooms = this.renderRooms.bind(this);
  }

  renderRooms(room, i) {
    const currentRoom = this.props.currentRoom;
    const roomUrl = room.name.toLowerCase().replace(' ', '-');
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
    const { username } = this.props;
    return (
      <div className="SideBar">
        <div className="SideBar-info">
          <h3>{username}</h3>
          <OnlineMinutes/>
        </div>
        {this.props.rooms.map(this.renderRooms)}
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
