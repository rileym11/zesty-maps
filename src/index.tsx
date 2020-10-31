// Need to direct typescript to use the googlemaps types (https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)
/// <reference types="@types/googlemaps" />

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './helpers/reportWebVitals';
import { AppWithLayout } from 'containers/App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppWithLayout />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
