import React from 'react';
import ReactDOM from 'react-dom';
import { LandingPage } from './landing.page'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return <div>
    <LandingPage /> 
  </div>
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
