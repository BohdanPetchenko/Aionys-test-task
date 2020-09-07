import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Router } from "react-router-dom";
import { Provider } from 'react-redux'

import { history } from "./history/index";
import store from "./store/index";

import Header from './Components/Header';

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <Header />
      </Provider>
    </Router>
  );
}

export default App;
