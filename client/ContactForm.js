import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ContactForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            firstName: {
                value: '',
                valid: false
            }
        }
    }

    handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true })
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Contact Dr. Berland</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Send a message to Dr. Berland to find out more information or to book an appointment.</Card.Subtitle>
                    <Row noGutters>
                    <Col>
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Row className="mt-2">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                isValid={this.state.firstName.valid}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please enter your first name.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please enter your last name.
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} md="12" controlId="validationCustomPhone">
                            <Form.Label>Phone number</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Phone number"
                                aria-describedby="inputGroupPrepend"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid phone number.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} md="12" controlId="validationCustomEmail">
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email address.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" required rows="5" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            />
                        </Form.Group>
                            <Button type="submit">Send</Button>
                        </Form>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default ContactForm;
