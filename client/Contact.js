import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './ContactForm';

class Contact extends Component {
    render() {
        return (
            <Container>
                <Row className="pt-5 mt-5 mb-4 ml-1 mr-1">
                    <Col xs={12} md={4}>
                        <Row>
                            <h4>Location</h4>
                        </Row>
                        <Row>
                            <h6>530 1st Avenue, Suite 6F<br />New York, NY 10016</h6>
                        </Row>
                        <Row>
                            <h4>Phone Number</h4>
                        </Row>
                        <Row>
                            <a href="tel:2122635060"><h6>212-263-5060</h6></a>
                        </Row>
                    </Col>
                    <Col xs={10} md={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;
