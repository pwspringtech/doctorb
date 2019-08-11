import React, { Component, Fragment } from 'react';
import Footer from './Footer';
import Home from './Home';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Home />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
