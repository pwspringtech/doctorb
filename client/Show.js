import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Show extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="mt-5 pt-5">
            <Col>test</Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Show;
