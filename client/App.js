import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Awareness from './Awareness';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/awareness" component={Awareness} />
          </Switch>
          <Footer />
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
