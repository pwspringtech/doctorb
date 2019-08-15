import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          fixed="top"
          bg="light"
          expand="md"
          collapseOnSelect
          className="mb-5"
        >
          <Container>
            <Navbar.Brand href="#">
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
                    <Link
                      to={{
                        pathname: 'about',
                        state: { twitterLoaded: false }
                      }}
                      className="nav-link"
                    >
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
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
