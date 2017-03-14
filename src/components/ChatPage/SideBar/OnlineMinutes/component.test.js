import React from 'react';
import ReactDOM from 'react-dom';
import OnlineMinutes from './component';

it('renders without crashing', () => {
  ReactDOM.render(<OnlineMinutes />, document.createElement('div'));
});
