import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Row className="mb-5">
          <Navbar
            fixed="top"
            bg="light"
            expand="md"
            collapseOnSelect
            // className="shadow 10px p-2 bg-white rounded"
          >
            <Container>
              <Navbar.Brand href="#" className={{ fontsize: 48 }}>
                Todd Berland, M.D. <br />
                <i>
                  <small> Vascular Specialist</small>
                </i>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end">
                  <Col>
                    <Nav.Item>
                      <Nav.Link href="#show">SiriusXM Show</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col>
                    <Nav.Item>
                      <Nav.Link href="#specialties/:null">Specialties</Nav.Link>
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
        </Row>
      </Fragment>
    );
  }
}

export default Navigation;
