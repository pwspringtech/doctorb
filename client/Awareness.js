import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Awareness extends Component {
  render() {
    return (
      <Fragment>
        <Container
          className="d-flex align-items-start flex-column  pt-5 mt-5"
          fluid
        >
          <Row className="justify-content-center">
            <Col md={3} className="m-1">
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
            <Col md={3} className="m-1">
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/PAD_Aware_Poster2_English.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/PAD-Poster2-Thumbnail.jpg"
                  />
                </Card.Link>
              </Card>
            </Col>
            <Col md={3} className="m-1">
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/PAD_Aware_Poster3_English.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/PAD-Poster3-Thumbnail.jpg"
                  />
                </Card.Link>
              </Card>
            </Col>

            <Col md={3} className="m-1">
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/Symptoms_Checklist.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/Symptoms_Checklist_thumb.png"
                  />
                </Card.Link>
              </Card>
            </Col>
            <Col md={3} className="m-1">
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/Artery-Anatomy-Flyer.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/Artery-Anatomy-Flyer-thumb.png"
                  />
                </Card.Link>
              </Card>
            </Col>
            <Col md={3} className="m-1">
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/Diagnosis-and-Treatment-Flyer.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/Diagnosis-and-Treatment-Flyer_thumb.png"
                  />
                </Card.Link>
              </Card>
            </Col>
            <Col md={3} className="m-1">
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/Fact-Sheet-thumb.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/Fact-Sheet-thumb.png"
                  />
                </Card.Link>
              </Card>
            </Col>
            <Col md={3} className="m-1">
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/patient_English.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/patient_English_thumb.png"
                  />
                </Card.Link>
              </Card>
            </Col>
            <Col md={3} className="m-1">
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/Angiosomes-Flyer.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/Angiosomes-Flyer-thumb.png"
                  />
                </Card.Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Awareness;
