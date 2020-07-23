import React from 'react';
import ReactDOM from 'react-dom';
import { LandingPage } from './landing.page'
import { BrowserRouter, Route } from 'react-router-dom'
import { AppLayout } from './app.layout'


const App = () => {
  return <div>
    <h1>Protected React Router</h1>
    <Route exact path="/" component={LandingPage} /> 
    <Route path="/app" component={AppLayout} /> 
  </div>
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
