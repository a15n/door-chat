import React, { Component } from 'react';
import './style.css';
import { request, toRoomName } from './utils';
import SideBar from './SideBar/component';
import MainHeader from './MainHeader/component';
import MainBody from './MainBody/component';
import MainFooter from './MainFooter/component';

const API_BASE_URL = 'http://localhost:8080/api';

class ChatPage extends Component {
  constructor() {
    super()

    this.state = {
      username: localStorage.getItem('doorChatUsername') || '',
      rooms: [],
      currentRoom: {},
      roomData: {},
      roomMessages: [],
    };

    this.updateState = this.updateState.bind(this);
    this.updateRoomMessages = this.updateRoomMessages.bind(this);
  }
  updateState(passedUrl) {
    const currentRoomUrl = passedUrl || this.props.params.currentRoomUrl; 
    const currentRoomName = toRoomName(currentRoomUrl);
    const stateObject = {};
    
    const self = this;
    request({url: `${API_BASE_URL}/rooms`})
    .then(data => {
      const rooms = JSON.parse(data);      
      const currentRoom = rooms.find(room => currentRoomName === room.name);

      stateObject.rooms = rooms;
      stateObject.currentRoom = currentRoom;
      return request({url: `${API_BASE_URL}/rooms/${currentRoom.id}`});
    })
    .then(data => {
      const roomData = JSON.parse(data);

      stateObject.roomData = roomData;
      return request({url: `${API_BASE_URL}/rooms/${roomData.id}/messages`});
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
  updateRoomMessages(message) {
    const { currentRoom, roomMessages, username } = this.state;

    request({
      method: 'POST',
      url: `${API_BASE_URL}/rooms/${currentRoom.id}/messages`,
      body: {name: username, message: message}
    }).then(res => {
      const roomMessagesCopy = [...roomMessages];

      roomMessagesCopy.push({
        message: message,
        name: username,
      });

      this.setState({
        roomMessages: roomMessagesCopy,
      });
    });
  }
  render() {
    const { rooms, currentRoom, roomData, roomMessages, username } = this.state;
    return (
      <div className="ChatPage">
        <SideBar rooms={rooms} currentRoom={currentRoom} username={username}/>
        <main className="ChatPage-main">
          <MainHeader roomData={roomData} username={username}/>
          <MainBody roomMessages={roomMessages} username={username}/>
          <MainFooter updateRoomMessages={this.updateRoomMessages}/>
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
