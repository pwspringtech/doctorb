import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Container className="d-flex flex-column">
        <Row className="justify-content-center">
          <h3>VASCULAR SPECIALIST</h3>
        </Row>
        <Row className="justify-content-center">
          <h5>
            Todd Berland, M.D. is a world renowned vascular surgeon in the heart
            of New York City
          </h5>
        </Row>
      </Container>
    );
  }
}

export default Home;
