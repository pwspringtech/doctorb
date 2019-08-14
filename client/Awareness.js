import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

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
                <Card.Link href="brochures/SymptomsChecklist.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/SymptomsChecklist_800.png"
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
                    src="brochures/Artery-Anatomy-Flyer.png"
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
                <Card.Link href="brochures/patientEnglish.pdf">
                  <Card.Img
                    style={{
                      maxWidth: '650px'
                    }}
                    src="brochures/patientEnglishThumb.png"
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
