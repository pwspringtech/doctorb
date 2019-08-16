import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

class Show extends Component {
  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-row">
          <Row className="mt-5 pt-5">
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block"
                  src="/show-pics/Todd-drradio.jpeg"
                  alt="First slide"
                  fluid
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block"
                  src="/show-pics/Todd-drradio-mic2.jpeg"
                  alt="Second slide"
                  fluid
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block"
                  src="/show-pics/VascularSurgery-showLogo.png"
                  alt="Third slide"
                  fluid
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Show;
