import React from 'react';
import ReactDOM from 'react-dom';
import MainFooter from './component';

it('renders without crashing', () => {
  ReactDOM.render(<MainFooter updateRoomMessages={() => {}} />, document.createElement('div'));
});
