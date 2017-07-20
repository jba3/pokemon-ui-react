import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import Routes from './modules/App/routes/index.jsx';

import './styles/main.styl';

if (module.hot) module.hot.accept();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
