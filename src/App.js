import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';
import { Login, Main } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
