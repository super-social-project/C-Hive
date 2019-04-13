import React, { Component } from 'react';
import TrendingArticles from './components/trendingArticles/trending'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        - reset
        - set up Router
        - set up for StyledComponents
        - create first Route to HomePage
        - create Route for LandingPage
        */}
        <TrendingArticles />
      </div>
    );
  }
}

export default App;
