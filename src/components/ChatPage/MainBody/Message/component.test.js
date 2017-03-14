import React from 'react';
import ReactDOM from 'react-dom';
import Message from './component';

it('renders without crashing', () => {
  ReactDOM.render(<Message message={''} name={''} />, document.createElement('div'));
});
