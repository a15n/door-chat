import React from 'react';
import ReactDOM from 'react-dom';
import MainBody from './component';

it('renders without crashing', () => {
  ReactDOM.render(<MainBody roomMessages={[]} username={''} />, document.createElement('div'));
});
