import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import PublicRoute from './router/PublicRoute';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <PublicRoute />
      </Provider>
     
    );
  }
}

export default App;
