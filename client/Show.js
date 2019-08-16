import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

class Show extends Component {
  render() {
    return (
      <Fragment>
        <Container
          className="d-flex flex-column "
          style={{ marginTop: '120px' }}
        >
          <Row xs={4} md={6} className="justify-content-center">
            <Col>
              <Image
                src="/show-pics/VascularSurgery.png"
                alt="Vascular Surgery Show"
                width="350px"
                className="ml-2 mb-2"
              />
              <h5 className="mb-3 ml-5">Vascular Disease & Treatments</h5>

              <Carousel className="ml-2 mb-3">
                <Carousel.Item>
                  <Image
                    style={{ maxWidth: '350px', maxHeight: '350px' }}
                    className="d-block"
                    src="/show-pics/Todd-drradio.jpeg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    style={{ maxWidth: '350px', maxHeight: '350px' }}
                    className="d-block"
                    src="/show-pics/Todd-drradio-mic2.jpeg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    style={{ maxWidth: '350px', maxHeight: '350px' }}
                    className="d-block"
                    src="/show-pics/operating.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              <h6 className="ml-5 mb-2 mt-2">
                Doctor Radio SiriusXM Channel 110{' '}
              </h6>
            </Col>
            <Col>
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

              <Image
                src="/show-pics/DoctorRadio.png"
                alt="Vascular Surgery Show"
                width="125px"
                type="image/svg"
                className="mr-4 ml-4"
              />
              <Image
                src="/show-pics/sxm-logo-mobile-color.png"
                alt="Vascular Surgery Show"
                width="100px"
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Show;
