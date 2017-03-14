import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './component';

it('renders without crashing', () => {
  ReactDOM.render(<SideBar rooms={[]} currentRoom={{}} username={''} />, document.createElement('div'));
});
