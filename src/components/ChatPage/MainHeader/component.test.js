import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader from './component';

it('renders without crashing', () => {
  ReactDOM.render(<MainHeader roomData={{}} username={''} />, document.createElement('div'));
});
