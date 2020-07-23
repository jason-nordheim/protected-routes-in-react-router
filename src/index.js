import React from 'react';
import ReactDOM from 'react-dom';
import { LandingPage } from './landing.page'
import { BrowserRouter, Route } from 'react-router-dom'


const App = () => {
  return <div>
    <h1>Protected React Router</h1>
    <Route exact path="/" component={LandingPage} /> 
  </div>
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
