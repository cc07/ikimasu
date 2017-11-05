import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'

import './App.css';
import Login from './components/Login';
import { firebaseConfig } from './data';

const reduxFirebaseConfig = {
  userProfile: 'users',
  attachAuthIsReady: true
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig),
)(createStore)

const mapStateToProp = ({ user }) => ({
  firebase: firebaseStateReducer,
  user: user
})

const rootReducer = combineReducers(mapStateToProp);

const initialState = {
  firebase: null,
  user: null
}

const store = createStoreWithFirebase(rootReducer, initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Login />
        </div>
      </Provider>
    );
  }
}

export default App;
