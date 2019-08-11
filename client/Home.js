import React, { Component } from 'react';
import { Container, Col, Image, ResponsiveEmbed, Row } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Container className="d-flex flex-column">
        <Row className="justify-content-center p-2">
          <h3>VASCULAR SPECIALIST</h3>
        </Row>
        <Row className="justify-content-center pb-4">
          <h5>
            Todd Berland, M.D. is a world renowned vascular surgeon in the heart
            of New York City
          </h5>
        </Row>

        <Row>
          <Col xs lg="6">
            <Image
              className="border shadow p-3 bg-white rounded"
              src="/toddberland-500px.jpg"
              fluid
            />
          </Col>
          <Col xs lg="6">
            <p style={{ textIndent: '40px' }} className="lead">
              Dr. Berland is a world renowned vascular surgeon based in New York
              City. He is listed in Castle Connolly “America’s Top Doctors” for
              2019 and has been a member of Alpha Omega Alpha, America’s top
              Medical Society, since 2003. Dr Berland is published extensively
              and is the principal investigator for several ongoing research
              trials. Dr. Berland is also the host of the “Vascular Surgery
              Show” on Sirius/XM‘s Doctor Radio (Channel 110), which airs live
              bi-weekly on Fridays from 6-8am.
            </p>
            <p style={{ textIndent: '40px' }} className="lead">
              Dr. Berland obtained his degree from the Medical College of
              Georgia in 2003 and completed his General Surgery residency at
              Mayo Clinic in 2008, where, as Chief Resident, he was awarded a
              patent for a unique minimally invasive technique that can be used
              in different procedures over a wide range of surgical
              subspecialties. Dr. Berland decided to pursue a fellowship in
              Vascular Surgery when it became apparent that the field’s
              technology was rapidly advancing towards less invasive procedures,
              allowing patients to recover and return to their daily activities
              more quickly. Upon completing his fellowship at NYU’s Lagone
              Medical Center in 2010, Dr. Berland joined the faculty there and
              is currently the Director of Outpatient Vascular Interventions.
              Dr. Berland speaks nationally and internationally.
            </p>
          </Col>
        </Row>
        <Row>
          <ResponsiveEmbed
            aspect="16by9"
            style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
          >
            <embed
              type="video/mp4"
              src="/Todd-Berland-MD.mp4"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </ResponsiveEmbed>
        </Row>
      </Container>
    );
  }
}

export default Home;
