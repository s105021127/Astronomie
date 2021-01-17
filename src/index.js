import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './views/homePage'
import SignUp from './views/signUp';
import ProjectList from './views/projectList'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home-page" component={HomePage} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/project-list" component={ProjectList} />
      </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
