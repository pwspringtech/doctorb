import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

class Publications extends Component {
  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-row pt-5 mt-5">
          <Row className="justify-content-center">
            {/* card */}
            <Col xs xl="3" className="m-1 p-1">
              <Card
                style={{
                  borderWidth: '2px',
                  padding: 2
                }}
              >
                <Card.Body>
                  <Card.Link href="/publications/1000-saphenous-ablations-1.pdf">
                    <Card.Img
                      variant="top"
                      src="/publications/1000-saphenous-ablations-pic3.png"
                      className="mb-3"
                    />
                    Laser Saphenous Ablations in More Than 1,000 Limbs With
                    Long-Term Dup Examination Follow-Up
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            {/* card */}
            <Col xs xl="3" className="m-1 p-1">
              <Card
                style={{
                  borderWidth: '2px',
                  padding: 2
                }}
              >
                <Card.Body>
                  <Card.Link href="/publications/Endovascular-Creation-of-Arteriovenous.pdf">
                    <Card.Img
                      variant="top"
                      src="/publications/Endovascular-Creation-of-Arteriovenous-pic1.png"
                      className="mb-3"
                    />
                    Endovascular Creation of Arteriovenous Fistulae for
                    Hemodialysis Access with a 4 Fr Device: Clinical Experience
                    from the EASE Study
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            {/* card */}
            <Col xs xl="3" className="m-1 p-1">
              <Card
                style={{
                  borderWidth: '2px',
                  padding: 2
                }}
              >
                <Card.Body>
                  <Card.Link href="https://www.ncbi.nlm.nih.gov/pubmed/17375786">
                    <Card.Img
                      variant="top"
                      src="/publications/CommonCarotidArteryImbrication-thumb.png"
                      className="mb-3"
                    />
                    Common carotid artery imbrication as an adjunct to carotid
                    endarterectomy to prevent postoperative carotid kinking
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            {/* card */}
            <Col xs xl="3" className="m-1 p-1">
              <Card
                style={{
                  borderWidth: '2px',
                  padding: 2
                }}
              >
                <Card.Body>
                  <Card.Link href="/publications/Acute-Mesenteric-Ischemia.pdf">
                    <Card.Img
                      variant="top"
                      src="/publications/Acute-Mesenteric-Ischemia-pic.jpg"
                      className="mb-3"
                    />
                    Acute Mesenteric Ischemia
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            {/* card */}
            <Col xs xl="3" className="m-1 p-1">
              <Card
                style={{
                  borderWidth: '2px',
                  padding: 2
                }}
              >
                <Card.Body>
                  <Card.Link href="/publications/1000-saphenous-ablations-1.pdf">
                    <Card.Img
                      variant="top"
                      src="/publications/Cysticadventitialdiseaseofthepoplitealartery.png"
                      className="mb-3"
                    />
                    Cystic adventitial disease of the popliteal artery: is there
                    a consensus in management
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            {/* card */}
            <Col xs xl="3" className="m-1 p-1">
              <Card
                style={{
                  borderWidth: '2px',
                  padding: 2
                }}
              >
                <Card.Body>
                  <Card.Link href="/publications/1000-saphenous-ablations-1.pdf">
                    <Card.Img
                      variant="top"
                      src="/publications/1000-saphenous-ablations-pic1.jpg"
                      className="mb-3"
                    />
                    A unique technique for intentional occlusion of an abdominal
                    aortic aneurysm
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            {/* card */}
            <Col xs xl="3" className="m-1 p-1">
              <Card
                style={{
                  borderWidth: '2px',
                  padding: 2
                }}
              >
                <Card.Body>
                  <Card.Link href="/publications/UpdateonEndovenousLaserAblation.pdf">
                    <Card.Img
                      variant="top"
                      src="/publications/UpdateonEndovenousLaserAblation_pic1.png"
                      className="mb-3"
                    />
                    Update on Endovenous Laser Ablation
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Publications;
