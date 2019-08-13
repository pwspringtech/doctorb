
import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

class Awareness extends Component {
  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-column pt-5 mt-5">
          <Row>
            <Col>
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/PAD_Aware_Poster1_English.pdf">
                  <Card.Img src="brochures/PAD-Poster1-Thumbnail.jpg" />
                </Card.Link>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/PAD_Aware_Poster2_English.pdf">
                  <Card.Img src="brochures/PAD-Poster2-Thumbnail.jpg" />
                </Card.Link>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/PAD_Aware_Poster3_English.pdf">
                  <Card.Img src="brochures/PAD-Poster3-Thumbnail.jpg" />
                </Card.Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/patientEnglish.pdf">
                  <Card.Img src="brochures/patientEnglishThumb.png" />
                </Card.Link>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/SymptomsChecklist.pdf">
                  <Card.Img src="brochures/SymptomsChecklist_800.png" />
                </Card.Link>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  borderWidth: '2px'
                }}
              >
                <Card.Link href="brochures/Artery-Anatomy-Flyer.pdf">
                  <Card.Img src="brochures/Artery-Anatomy-Flyer.png" />
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




import React, { Component, Fragment } from 'react';
import { Button, Container, Image, Modal } from 'react-bootstrap';
// import MyVerticallyCenteredModal from './PDFmodal';

class Awareness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: true
    };
  }

  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-row pt-5 mt-5">
          {/* <Image src="/patientEnglishThumb.png" /> */}
          {/* <Button
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            OPEN
          </Button> */}

          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button>Close</Button>
            </Modal.Footer>
          </Modal>

          <object
            data="/patientEnglish.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Your browser does not support PDFs.
              <a href="/patientEnglish.pdf">Download the PDF</a>.
            </p>
          </object>
          {/* <MyVerticallyCenteredModal /> */}
        </Container>
      </Fragment>
    );
  }
}

export default Awareness;
