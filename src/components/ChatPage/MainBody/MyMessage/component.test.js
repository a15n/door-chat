import React from 'react';
import ReactDOM from 'react-dom';
import MyMessage from './component';

it('renders without crashing', () => {
  ReactDOM.render(<MyMessage message={''} name={''} />, document.createElement('div'));
});

// TODO rename MyMessage
