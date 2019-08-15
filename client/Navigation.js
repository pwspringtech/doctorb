import React, { Component, Fragment } from 'react';
import { Container, Col, Navbar, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar fixed="top" bg="light" style={{ marginBottom: 12 }}>
          <Container>
            <Navbar.Brand href="#">
              Todd Berland, M.D. | <i>Vascular Specialist</i>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Col>
                <Row>
                  <Nav.Item>SiriusXM Show</Nav.Item>
                </Row>
              </Col>
              <Col>
                <Nav.Item>
                  <Nav.Link href="#specialties">Specialties</Nav.Link>
                </Nav.Item>
              </Col>
              <Col>
                <Nav.Item>
                  <Nav.Link href="#publications">Publications</Nav.Link>
                </Nav.Item>
              </Col>
              <Col>
                <Nav.Item>
                  <Nav.Link href="#awareness">Awareness</Nav.Link>
                </Nav.Item>
              </Col>
              <Col>
                <Nav.Item>
                    <Link to={{ pathname: 'about', state: { twitterLoaded: false } }} className="nav-link">
                      About
                    </Link>
                </Nav.Item>
              </Col>
              <Col>
                <Nav.Item>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav.Item>
              </Col>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
