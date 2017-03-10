import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';

it('renders without crashing', () => {
  ReactDOM.render(<LoginPage />, document.createElement('div'));
});
