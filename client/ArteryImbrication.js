import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

class ArteryImbrication extends Component {
  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-column pt-5 mt-5">
          <Row className="justify-content-center">
            <Col>
              <Jumbotron className="justify-content-center">
                <Row className="mb-3 p-2">
                  <h4>
                    Common carotid artery imbrication as an adjunct to carotid
                    endarterectomy to prevent postoperative carotid kinking
                  </h4>
                </Row>
                <Row className="mb-5">
                  <Image
                    className="p-1"
                    src="/publications/Acute-Mesenteric-Ischemia-pic.jpg"
                    fluid
                  />
                </Row>
                <Row className="mb-4 p-2">
                  <h6>Common Carotid Artery Imbrication</h6>
                </Row>
                <Row className="mb-3 p-2">
                  <p>
                    ELONGATION OF THE CAROTID artery is found in up to 38
                    percent of the normal population. Distal mobilization of the
                    carotid artery during endarterectomy may increase vessel
                    redundancy and make the vessel even more prone to kinking.
                    Carotid kinking can be associated with an abnormal flow
                    pattern upon duplex ultrasound examination which may
                    contribute to the development of restenosis from increased
                    turbulence. A recent report suggested that kinking may be
                    associated with an increased risk of cerebrova.scular
                    events. Shortening procedures consecutive to carotid
                    endarterectomy have been recommended when a redundant vessel
                    segment is pre.sent after endarterectomy to allow
                    undisturbed blood flow.–2.4-7 We investigated a single
                    surgeon’s experience with a technique combining standard
                    endarterectomy via a longitudinal incision with imbrication
                    of the common carotid artery (CCA).
                  </p>
                </Row>
                <Row className="justify-content-between">
                  <Button href="https://www.ncbi.nlm.nih.gov/pubmed/17375786">
                    Click here to read the full publication
                  </Button>
                  <Button href="#publications">Back</Button>
                </Row>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ArteryImbrication;
