import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ContactForm from './ContactForm';
import Map from './Map';
import { FaPhone } from 'react-icons/fa';

class Contact extends Component {
  render() {
    return (
      <Container className="d-flex flex-column">
        <Row className="pt-5 mt-3 mb-4 ml-1 mr-1">
          <Col xs={12} md={6} className="mt-3">
            <Card
              className="shadow"
              style={{
                borderWidth: 2,
                borderColor: '#74b4ca'
              }}
            >
              <Map />
              <Card.Body>
                <Row className="mt-4 justify-content-center">
                  <p>
                    Dr. Berland is located inside NYU Langone Medical Center at:
                  </p>
                  <h6>
                    530 1st Avenue, Suite 6F
                    <br />
                    New York, NY 10016
                  </h6>
                  <p>Please call the office for appointments or more info:</p>
                </Row>

                <a href="tel:2122635060">
                  <Row className="mt-1 justify-content-center">
                    <FaPhone className="mr-2" />
                    <h6>212-263-5060</h6>
                  </Row>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mt-3">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
