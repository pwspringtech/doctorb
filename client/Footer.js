import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
  render() {
    return (
      <Container fluid={true} className="bg-light">
        <Row>
          <Container>
            <Row className="mt-5 mb-5">
              <Col>
                <Row>
                  <Col>
                    <h6>Home</h6>
                    <h6>About</h6>
                    <h6>Publications</h6>
                    <h6>
                      <i>Vascular Surgery Show</i> SiriusXM
                    </h6>
                    <h6>Contact</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>530 1st Avenue #6f New York, NY 10016</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <h6>Specialties</h6>
                <ul>
                  <li>Vascular Surgery</li>
                  <li>Endovascular Surgery</li>
                  <li>Peripheral Vascular Disease</li>
                  <li>Angioplasty / Stenting</li>
                  <li>Venous Disease</li>
                  <li>Venous Disease</li>
                  <li>Deep Vein Thrombosis</li>
                  <li>Aortic Anuerysms</li>
                  <li>Cerebrovascular Disease</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Footer;
