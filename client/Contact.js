import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './ContactForm';
import Map from './Map';
import { FaPhone } from 'react-icons/fa';

class Contact extends Component {
  render() {
    return (
      <Container>
        <Row className="pt-5 mt-5 mb-4 ml-1 mr-1">
          <Col xs={12} md={6}>
            <Row>
              <Map />
            </Row>
            {/* <Row>
              <p>location</p>
            </Row> */}
            <Row className="mt-2">
              <h6>
                530 1st Avenue, Suite 6F
                <br />
                New York, NY 10016
              </h6>
            </Row>
            {/* <Row>
              <p>phone</p>
            </Row> */}
            <Row>
              <FaPhone className="mr-2" />
              <a href="tel:2122635060">
                <h6>212-263-5060</h6>
              </a>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
