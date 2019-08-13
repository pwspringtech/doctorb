import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

class Publications extends Component {
  render() {
    return (
      <Fragment>
        <Container
          className="d-flex align-items-start flex-column  pt-5 mt-5"
          fluid
        >
          <Row className="justify-content-center">
            <Col xs xl="3" className="m-4 ">
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/PAD_Aware_Poster1_English.pdf">
                  <Card.Img
                    src="brochures/PAD-Poster1-Thumbnail.jpg"
                    style={{
                      maxWidth: '650px'
                    }}
                  />
                </Card.Link>
              </Card>
            </Col>
            <Col>
              <div
                className="rg-plugin"
                data-stats="true"
                data-faces="true"
                data-publications="true"
                data-height="600"
                data-width="600"
                data-theme="light"
                data-type="department"
                data-installationid="5d530b69f8ea523e84281f21"
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Publications;
