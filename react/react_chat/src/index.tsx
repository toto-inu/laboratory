import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import './styles/reset.scss';
import './styles/foundation.scss';

import Layout from "./components/templates/Layout";
import Top from './pages/Top';
import Chat from './pages/Chat';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Top />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Layout>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
