import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={HomePage} />
      </div>
    );
  }
}

export default App;
