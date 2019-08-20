import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TwitterDisplay from './TwitterDisplay';
import ContactForm from './ContactForm';

class About extends Component {

    render() {
        return (
            <Container>
                <Row className="pt-5 mt-5 mb-2" >
                    <Col>
                        <TwitterDisplay twitterLoaded={false} />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;
