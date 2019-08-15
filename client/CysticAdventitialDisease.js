import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

class CysticAdventitialDisease extends Component {
  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-column pt-5 mt-5">
          <Row className="justify-content-center">
            <Col>
              <Jumbotron className="justify-content-center">
                <Row className="mb-3 p-2">
                  <h4>
                    Cystic adventitial disease of the popliteal artery: is there
                    a consensus in management
                  </h4>
                </Row>
                <Row className="mb-5">
                  <Image
                    className="p-1"
                    src="/publications/Cysticadventitialdiseaseofthepoplitealartery.png"
                    fluid
                  />
                </Row>

                <Row className="mb-3 p-2">
                  <p>
                    Cystic adventitial disease (CAD) is a rare cause of
                    claudication in young to middle-aged individuals. The
                    disease most commonly affects males, presenting as cramps in
                    the lower legs followed by symptoms of intermittent
                    claudication. The cause is the presence of a gelatinous cyst
                    found between the adventitial layer and media, causing
                    complete occlusion or stenosis of the affected vessel.1 The
                    popliteal artery is the most commonly affected, although
                    cases have been documented involving the iliac vessels,
                    great saphenous veins (GSVs) and arterial vessels
                    surrounding the elbow and wrist joints.2–5 Debate persists
                    regarding the pathogenesis of CAD. Among the theories
                    postulated, the four prominent ones are trauma, systemic
                    degeneration, ganglion and developmental theory.6 The trauma
                    theory proposes repetitive trauma as the cause of
                    adventitial degeneration. The systemic degeneration
                    hypothesis postulates that connective tissue disorder is the
                    cause of cyst formation in the adventia. According to the
                    ganglion theory, synovial casts migrate along vessels and
                    implant into the adventia. And finally, the developmental or
                    the embryonal theory states that cystic degeneration is due
                    to erroneous migration of mesenchymal cells from surrounding
                    joints. These cells end up in the adventia and over time
                    secrete mucin, resulting in obstruction of the vessel.
                  </p>
                </Row>
                <Row className="justify-content-between">
                  <Button href="/publications/1000-saphenous-ablations-1.pdf">
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

export default CysticAdventitialDisease;
