import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import TwitterDisplay from './TwitterDisplay';
import ContactForm from './ContactForm';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

class Show extends Component {
  constructor() {
    super();
    this.state = {
      formVisible: null
    };
  }

  render() {
    return (
      <Fragment>
        <Container
          className="d-flex flex-column p-3"
          style={{ marginTop: '70px' }}
        >
          <Row className="justify-content-between p-3">
            <Col className="pl-5 pr-5">
              <Row xs={10} xl={10} className="mb-3">
                <Image
                  src="/show-pics/VascularSurgery-DrRadio-logo.png"
                  alt="Vascular Surgery Show"
                  height="70px"
                  // className="ml-2"
                />
              </Row>
              <Carousel>
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

              <Row
                style={{ height: '40px' }}
                className="justify-content-start mt-3 mb-1 ml-4"
              >
                <Image
                  src="/show-pics/SiriusXM_grey.png"
                  alt="Vascular Surgery Show"
                  height="32px"
                />
                <Image
                  src="/show-pics/Channel-110-grey.png"
                  alt="Vascular Surgery Show"
                  height="28px"
                  className="ml-2 pt-2"
                />
              </Row>

              <Row className="justify-content-center">
                <h5>
                  Dr. Todd Berland{' '}
                  <small>
                    discusses vascular health as well as diseases of the
                    vascular system and how they are managed.
                    <br />
                    <br />
                    The Vacular Surgery Show is recorded bi-monthly and airs
                    live on SiriusXM channel 110 every other Friday 6am-8am ET
                    and re-airs Friday 4pm-6pm ET. On-Demand episodes are also
                    available via SiriusXM.
                  </small>
                </h5>
              </Row>
              <Row className="justify-content-center m-3">
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  value="true"
                  onChange={() =>
                    this.setState({ formVisible: !this.state.formVisible })
                  }
                >
                  <ToggleButton>message Dr. Todd Berland</ToggleButton>
                </ToggleButtonGroup>
              </Row>
              <Row className="mt-2 p-1">
                {this.state.formVisible ? <ContactForm /> : null}
              </Row>
            </Col>
            <Row xs xl="auto" className="m-2">
              <Col className="border shadow p-1 bg-white rounded">
                <TwitterDisplay twitterLoaded={false} />
              </Col>
            </Row>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Show;
