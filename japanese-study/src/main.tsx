import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import AppModule from './modules/App.module';

ReactDOM.render(
  <React.StrictMode>
    <AppModule />
  </React.StrictMode>,
  document.getElementById('root')
);
