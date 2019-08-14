import React, { Component, Fragment } from 'react';
import { Container, Col, Navbar, Nav, Row } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          fixed="top"
          bg="light"
          style={{ marginBottom: 12 }}
          expand="lg"
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand href="#">
              Todd Berland, M.D. | <i>Vascular Specialist</i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end">
                <Col>
                  <Nav.Item>
                    <Nav.Link>SiriusXM Show</Nav.Link>
                  </Nav.Item>
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
                    <Nav.Link href="#about">About</Nav.Link>
                  </Nav.Item>
                </Col>
                <Col>
                  <Nav.Item>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav.Item>
                </Col>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
