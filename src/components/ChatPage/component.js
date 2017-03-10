import React, { Component } from 'react';
import SideBar from './SideBar/component';
import MainHeader from './MainHeader/component';
import MainBody from './MainBody/component';
import MainFooter from './MainFooter/component';
import './style.css';

class ChatPage extends Component {
  componentDidMount() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function() {
      const response = JSON.parse(this.responseText);
      console.log(response);
    });
    oReq.open('GET', 'http://localhost:8080/api/rooms/0/messages');
    oReq.send();
  }
  render() {
    return (
      <div className='ChatPage'>
        <SideBar />
        <main className='ChatPage-main'>
          <MainHeader />
          <MainBody />
          <MainFooter />
        </main>
      </div>
    );
  }
}

export default ChatPage;
