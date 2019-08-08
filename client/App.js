import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
        <div>App Rendering</div>
      </Container>
    );
  }
}

export default App;
