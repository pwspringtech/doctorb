import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

class UpdateEVLA extends Component {
  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-column pt-5 mt-5">
          <Row className="justify-content-center">
            <Col>
              <Jumbotron className="justify-content-center">
                <Row className="mb-3 p-2">
                  <h4>Update on Endovenous Laser Ablation</h4>
                </Row>
                <Row className="mb-5">
                  <Col xs={12} md={4}>
                    <Image
                      src="/publications/UpdateonEndovenousLaserAblation_pic1.png"
                      thumbnail
                      maxWidth="100%"
                      height="auto"
                      fluid
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Image
                      src="/publications/UpdateonEndovenousLaserAblation_pic2.png"
                      thumbnail
                      maxWidth="100%"
                      height="auto"
                      fluid
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Image
                      src="/publications/UpdateonEndovenousLaserAblation_pic3.png"
                      thumbnail
                      maxWidth="100%"
                      height="auto"
                      fluid
                    />
                  </Col>
                </Row>

                <Row className="mb-3 p-2">
                  <p>
                    In 2001, the use of endovenous laser ablation (EVLA) was
                    introduced to the United States to treat superficial venous
                    insufficiency. EVLA has subsequently undergone a rapid rise
                    in popularity and usage with a concomitant decrease in
                    traditional operative saphenectomy. Since its inception, the
                    use of EVLA to treat superficial venous insufficiency has
                    advanced significantly. The efficacy of treatment has been
                    validated using both hemoglobin-specific laser wavelength
                    and water-specific laser wavelength lasers. Currently, laser
                    optimization is focusing on reducing postprocedural
                    sequelae. The clinical parameters that correlate best with
                    improved postoperative recovery use lower power/energy
                    settings, water-specific laser wavelength lasers, and jacket
                    or radial-emitting tips. Future study is still required to
                    assess the durability of treatment at lower power and energy
                    settings coupled with jacket or radial-emitting tip fibers.
                    Long-term follow-up using duplex imaging is recommended to
                    ensure persistent treatment success.
                  </p>
                </Row>
                <Row className="justify-content-between">
                  <Button href="/publications/UpdateonEndovenousLaserAblation.pdf">
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

export default UpdateEVLA;
