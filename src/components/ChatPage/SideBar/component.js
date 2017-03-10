import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

class SideBar extends Component {
  constructor() {
    super();
    this.renderRooms = this.renderRooms.bind(this);
  }

  renderRooms(room, i) {
    const currentRoom = this.props.currentRoom;
    const roomUrl = room.name.toLowerCase().replace(' ', '-');
    return (
      <li 
        key={i} 
        className={room === currentRoom ? 'active' : ''}
      >
        <Link to={roomUrl}>{room.name}</Link>
      </li>
    )
  }

  render() {
    return (
      <div className="SideBar">
        <ul>
          {this.props.rooms.map(this.renderRooms)}
        </ul>
      </div>
    )
  }
}

SideBar.propTypes = {
  rooms: React.PropTypes.array.isRequired,
  currentRoom: React.PropTypes.object.isRequired,
}

export default SideBar;
