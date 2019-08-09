import React, { Component, Fragment } from 'react';
import Home from './Home';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
