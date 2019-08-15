import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Awareness from './Awareness';
import Navigation from './Navigation';
import Specialties from './Specialties';
import Publications from './Publications';
import Contact from './Contact';
import About from './About';
import Show from './Show';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/awareness" component={Awareness} />
            <Route exact path="/specialties" component={Specialties} />
            <Route exact path="/about" component={About} />
            <Route exact path="/publications" component={Publications} />
            <Route exact path="/show" component={Show} />
          </Switch>
          <Footer />
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
