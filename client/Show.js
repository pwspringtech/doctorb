import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Image from 'react-bootstrap/Image';
import TwitterDisplay from './TwitterDisplay';
import ContactForm from './ContactForm';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import InstagramEmbed from 'react-instagram-embed';

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
          <Row className="justify-content-center p-3">
            <Col xs={12} xl={6} className="pl-1 pr-1 mr-2">
              <Row className="mb-3">
                <Image
                  src="/show-pics/VascularSurgery-DrRadio-logo.png"
                  alt="Vascular Surgery Show"
                  height="70px"
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

              <Row className="justify-content-center p-3">
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
                  <ToggleButton
                    style={{
                      background: '#74b4ca',
                      color: 'white',
                      borderColor: '#74b4ca'
                    }}
                  >
                    send Dr. Todd Berland a message
                  </ToggleButton>
                </ToggleButtonGroup>
              </Row>
              <Row className="mt-3 justify-content-center">
                {this.state.formVisible ? <ContactForm /> : null}
              </Row>
              <Row>
                <InstagramEmbed
                  url="https://www.instagram.com/p/BzQL0IEHcWD/"
                  maxWidth={320}
                  hideCaption={false}
                  containerTagName="div"
                  protocol=""
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {
                    console.log('success!');
                  }}
                  onAfterRender={() => {}}
                  onFailure={() => {
                    console.log('no insta!');
                  }}
                />
              </Row>
            </Col>
            <Row className="m-2">
              <Col xs={12} xl={12} className="border shadow bg-white rounded">
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
