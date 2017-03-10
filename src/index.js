import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import HomePage from './components/HomePage/component';
import LoginPage from './components/LoginPage/component';
import ChatPage from './components/ChatPage/component';
import NotFound from './components/NotFound/component';

import './index.css';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={HomePage} />
        <Match exactly pattern='/login' component={LoginPage}/>
        <Match exactly pattern='/chat' component={ChatPage} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
