import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Home from './Home';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
        <div>App Rendering</div>
        <Footer />
      </Container>
    );
  }
}

export default App;
