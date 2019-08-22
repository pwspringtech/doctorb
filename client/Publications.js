import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Publications extends Component {
  componentDidMount() {
    (() => {
      var st = document.createElement('script');
      st.type = 'text/javascript';
      st.async = true;
      st.src =
        'https://www.researchgate.net/javascript/plugin/plugin-api-min.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(st, s);
    })();
  }

  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-column  pt-5 mt-5" fluid>
          <Row className="justify-content-start pb-1">
            {/* card */}
            <Col xs={12} md={3}>
              <Card
                style={{
                  borderWidth: 1,
                  borderColor: '#74b4ca',
                  padding: 2,
                  marginTop: 8
                }}
              >
                <Card.Body>
                  <Card.Link
                    href="/publications/1000-saphenous-ablations-1.pdf"
                    className="text-dark"
                  >
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

              <Card
                style={{
                  borderWidth: 1,
                  borderColor: '#74b4ca',
                  padding: 2,
                  marginTop: 8
                }}
              >
                <Card.Body>
                  <Card.Link
                    className="text-dark"
                    href="/publications/Endovascular-Creation-of-Arteriovenous.pdf"
                  >
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
            <Col xs={12} md={3}>
              <Card
                style={{
                  borderWidth: 1,
                  borderColor: '#74b4ca',
                  padding: 2,
                  marginTop: 8
                }}
              >
                <Card.Body>
                  <Card.Link className="text-dark" href="#arteryimbrication">
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

              <Card
                style={{
                  borderWidth: 1,
                  borderColor: '#74b4ca',
                  padding: 2,
                  marginTop: 8
                }}
              >
                <Card.Body>
                  <Card.Link className="text-dark" href="#mesentericischemia">
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
            <Col xs={12} md={3}>
              <Card
                style={{
                  borderWidth: 1,
                  borderColor: '#74b4ca',
                  padding: 2,
                  marginTop: 8
                }}
              >
                <Card.Body>
                  <Card.Link
                    className="text-dark"
                    href="#cysticadventitialdisease"
                  >
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

              <Card
                style={{
                  borderWidth: 1,
                  borderColor: '#74b4ca',
                  padding: 2,
                  marginTop: 8
                }}
              >
                <Card.Body>
                  <Card.Link
                    className="text-dark"
                    href="#IntentionalOcclusionAAA"
                  >
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
            <Col xs={12} md={3}>
              <Card
                style={{
                  borderWidth: 1,
                  borderColor: '#74b4ca',
                  padding: 2,
                  marginTop: 5
                }}
              >
                <Card.Body>
                  <Card.Link className="text-dark" href="#UpdateEVLA">
                    <Card.Img
                      variant="top"
                      src="/publications/UpdateonEndovenousLaserAblation_pic1.png"
                      className="mb-3"
                    />
                    Update on Endovenous Laser Ablation
                  </Card.Link>
                </Card.Body>
              </Card>
              <Row style={{ offset: 8, padding: 10 }}>
                <div
                  style={{
                    borderWidth: 3,
                    borderColor: '#74b4ca'
                  }}
                  className="rg-plugin"
                  data-stats="true"
                  data-faces="true"
                  data-publications="true"
                  data-height="600"
                  data-width="400"
                  data-theme="light"
                  data-type="department"
                  data-installationId="5d5df620f8ea5243076660f2"
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Publications;
