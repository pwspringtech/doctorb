import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import TwitterDisplay from './TwitterDisplay';

class Show extends Component {
  render() {
    return (
      <Fragment>
        <Container
          className="d-flex flex-column "
          style={{ marginTop: '120px' }}
        >
          <Row md={4} className="justify-content-center">
            <Col>
              <Row style={{ height: '80px' }}>
                <Image
                  src="/show-pics/VascularSurgery.png"
                  alt="Vascular Surgery Show"
                  height="90px"
                  className="ml-2"
                />
                <Image
                  src="/show-pics/DoctorRadio.png"
                  alt="Vascular Surgery Show"
                  width="120px"
                  className="ml-2"
                />
              </Row>

              <Row
                style={{ height: '40px' }}
                className="justify-content-start mt-3 mb-3 ml-4"
              >
                <Image
                  src="/show-pics/SiriusXM_grey.png"
                  alt="Vascular Surgery Show"
                  height="40px"
                />
                <Image
                  src="/show-pics/Channel-110.png"
                  alt="Vascular Surgery Show"
                  height="35px"
                />
              </Row>

              <Carousel className="ml-2 mb-3">
                <Carousel.Item>
                  <Image
                    style={{ height: '350px' }}
                    className="d-block"
                    src="/show-pics/Todd-drradio.jpeg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    style={{ height: '350px' }}
                    className="d-block"
                    src="/show-pics/Todd-drradio-mic2.jpeg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    style={{ height: '350px' }}
                    className="d-block"
                    src="/show-pics/operating.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              <h5 className="mb-3 ml-5 mt-2">Vascular Disease & Treatments</h5>

              <h5 className="mt-2 pt-3">
                Dr. Todd Berland{' '}
                <small>
                  discusses vascular health as well as diseases of the vascular
                  system and how they are managed.
                  <br />
                  <br />
                  The Vacular Surgery Show is recorded bi-monthly and airs live
                  every other Friday 6am-8am ET and then re-airs Friday 4pm-6pm
                  ET. On-Demand episodes are also available for SiriusXM
                  subscribers.
                </small>
              </h5>
            </Col>
            <Col>
              <Col>
                <TwitterDisplay twitterLoaded={false} />
              </Col>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Show;
