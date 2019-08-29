import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Awareness from './Awareness';
import Navigation from './Navigation';
import Specialties from './Specialties';
import Publications from './Publications';
import ArteryImbrication from './ArteryImbrication';
import CysticAdventitialDisease from './CysticAdventitialDisease';
import MesentericIschemia from './MesentericIschemia';
import IntentionalOcclusionAAA from './IntentionalOcclusionAAA';
import UpdateEVLA from './UpdateEVLA';
import Contact from './Contact';
import About from './About';
import Show from './Show';
import ScrollToTop from './ScrollToTop';
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <ScrollToTop>
            <Navigation />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/awareness" component={Awareness} />
              <Route exact path="/about" component={About} />
              <Route exact path="/publications" component={Publications} />
              <Route
                exact
                path="/arteryimbrication"
                component={ArteryImbrication}
              />
              <Route
                exact
                path="/mesentericischemia"
                component={MesentericIschemia}
              />
              <Route
                exact
                path="/cysticadventitialdisease"
                component={CysticAdventitialDisease}
              />
              <Route
                exact
                path="/intentionalocclusionaaa"
                component={IntentionalOcclusionAAA}
              />
              <Route exact path="/updateevla" component={UpdateEVLA} />
              <Route exact path="/show" component={Show} />
              <Route exact path="/specialties/:dak?" component={Specialties} />
              <Route exact path="/termsandconditions" component={Terms} />
              <Route exact path="/privacypolicy" component={PrivacyPolicy} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
