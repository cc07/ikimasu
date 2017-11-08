import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase, firebaseStateReducer, getFirebase } from 'react-redux-firebase'
import registerServiceWorker from './registerServiceWorker';

import { firebaseConfig } from './data';
import { default as LoginReducer } from './components/Login/reducer';

import './index.css';
import App from './App';

const reduxFirebaseConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  firebaseStateName: 'firebase'
}

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  user: LoginReducer
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    reactReduxFirebase(firebaseConfig, reduxFirebaseConfig),
    applyMiddleware(thunk.withExtraArgument({ getFirebase }))
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
