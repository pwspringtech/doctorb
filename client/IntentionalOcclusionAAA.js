import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

class IntentionalOcclusionAAA extends Component {
  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-column pt-5 mt-5">
          <Row className="justify-content-center">
            <Col>
              <Jumbotron className="justify-content-center">
                <Row className="mb-3 p-2">
                  <h4>
                    A unique technique for intentional occlusion of an abdominal
                    aortic aneurysm
                  </h4>
                </Row>
                <Row className="mb-5">
                  <Image className="p-1" src="" fluid />
                </Row>

                <Row className="mb-3 p-2">
                  <p>
                    Since the first report of an endovascular repair of an
                    abdominal aortic aneurysm (AAA) in 1991, repair of AAAs has
                    undergone a transformation due to lower reported 30-day
                    mortality rates Traditional open surgery involving
                    aneurysmectomy and reconstruction has evolved to endoluminal
                    placement of a stent graft to exclude the aneurysm. Open
                    surgery has a reported operative mortality of w3 to 5% in
                    the relatively healthy patient. The risk can be much higher
                    in sicker patients with multiple comorbidities.3 An
                    alternative approach to open aneurysmectomy with
                    reconstruction in a high-risk cohort is ligation treatment
                    of aneurysms and an extra-anatomic bypass, which was
                    originally described in 1965. Having fallen out of favor in
                    the minimally invasive era, there may be a role for an
                    endovascular variant of this form of intervention. We report
                    the case of a high-risk patient with a prior
                    axillary-bifemoral bypass and an enlarging infrarenal AAA
                    who was treated with intentional endovascular occlusion of
                    the AAA.
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

export default IntentionalOcclusionAAA;
