import React, { Component } from 'react';
import SideBar from './SideBar/component';
import MainHeader from './MainHeader/component';
import MainBody from './MainBody/component';
import MainFooter from './MainFooter/component';
import './style.css';

const request = obj => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || 'GET', obj.url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// TODO put this in a utils file and add tests
function toRoomName(roomUrl='') {
  const roomNameWords = roomUrl.split('-');

  return roomNameWords.map(capitalize).join(' ');
}

class ChatPage extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      rooms: [],
      currentRoom: {},
      roomData: {},
      roomMessages: [],
    };

    this.updateState = this.updateState.bind(this);
  }
  updateState(passedUrl) {
    const currentRoomUrl = passedUrl || this.props.params.currentRoomUrl; 
    const currentRoomName = toRoomName(currentRoomUrl);
    const stateObject = {};
    
    const self = this;
    request({url: 'http://localhost:8080/api/rooms'})
    .then(data => {
      const rooms = JSON.parse(data);      
      const currentRoom = rooms.find(room => currentRoomName === room.name);

      stateObject.rooms = rooms;
      stateObject.currentRoom = currentRoom;
      return request({url: `http://localhost:8080/api/rooms/${currentRoom.id}`});
    })
    .then(data => {
      const roomData = JSON.parse(data);

      stateObject.roomData = roomData;
      return request({url: `http://localhost:8080/api/rooms/${roomData.id}/messages`});
    })
    .then(data => {
      const roomMessages = JSON.parse(data);

      stateObject.roomMessages = roomMessages;
      return Promise.resolve();
    })
    .then(() => {
      self.setState(stateObject);
    })
    .catch(error => {
      console.error(error);
    });
  }
  componentDidMount() {
    this.updateState()
  }
  componentWillReceiveProps(nextProps) {
    const pathnameParts = nextProps.pathname.split('/');
    const nextRoomUrl = pathnameParts[pathnameParts.length - 1]
    if (this.props.params.currentRoomUrl !== nextRoomUrl) {
      this.updateState(nextRoomUrl);
    }
  }
  render() {
    const { rooms, currentRoom, roomData, roomMessages } = this.state;

    return (
      <div className="ChatPage">
        <SideBar rooms={rooms} currentRoom={currentRoom} />
        <main className="ChatPage-main">
          <MainHeader roomData={roomData} />
          <MainBody roomMessages={roomMessages} />
          <MainFooter />
        </main>
      </div>
    );
  }
}

ChatPage.propTypes = {
  params: React.PropTypes.object.isRequired,
  'params.currentRoomUrl': React.PropTypes.string,
}

export default ChatPage;
