import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import Map from './Map';

class Footer extends Component {
  render() {
    return (
      <Container
        fluid={true}
        className="bg-light"
        style={{
          borderStyle: 'solid',
          borderWidth: '2px 0px 2px 0px',
          borderColor: '#74b4ca'
        }}
      >
        <Row>
          <Container>
            <Row className="mb-5">
              <Col sm className="mt-5">
                <Link to="/" className="text-dark">
                  <h6>Home</h6>
                </Link>
                <Link to="/about" className="text-dark">
                  <h6>About</h6>
                </Link>
                <Link to="/publications" className="text-dark">
                  <h6>Publications</h6>
                </Link>
                <Link to="/show" className="text-dark">
                  <h6>
                    <i>Vascular Surgery Show</i> SiriusXM
                  </h6>
                </Link>
                <Link to="/contact" className="text-dark">
                  <h6>Contact</h6>
                </Link>
                <p>
                  Tel: <a href="tel:2122635060">212-263-5060</a>
                </p>
                <SocialIcon
                  url="https://www.linkedin.com/in/todd-berland-5228ab19/"
                  style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                  url="https://twitter.com/VascularDr"
                  style={{ height: 40, width: 40 }}
                  className="ml-2 mr-2"
                />
                <SocialIcon
                  url="https://www.instagram.com/thevasculardr/"
                  style={{ height: 40, width: 40 }}
                />
              </Col>
              <Col sm className="mt-5">
                <Link to="/specialties" className="text-dark">
                  <h6>Specialties</h6>
                </Link>
                <ul>
                  <li>
                    <Link to="/specialties/0" className="text-dark">
                      Vascular Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialties/1" className="text-dark">
                      Endovascular Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialties/2" className="text-dark">
                      Peripheral Vascular Disease
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialties/3" className="text-dark">
                      Angioplasty / Stenting
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialties/4" className="text-dark">
                      Venous Disease
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialties/5" className="text-dark">
                      Deep Vein Thrombosis
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialties/6" className="text-dark">
                      Aortic Anuerysms
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialties/7" className="text-dark">
                      Cerebrovascular Disease
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col sm className="mt-4">
                <Map />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Footer;
