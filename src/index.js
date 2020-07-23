import React from 'react';
import ReactDOM from 'react-dom';
import { LandingPage } from './landing.page'

const App = () => {
  return <div>
    <LandingPage /> 
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
