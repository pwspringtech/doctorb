import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

class MesentericIschemia extends Component {
  render() {
    return (
      <Fragment>
        <Container className="d-flex flex-column pt-5 mt-5">
          <Row className="justify-content-center">
            <Col>
              <Jumbotron className="justify-content-center">
                <Row className="mb-3 p-2">
                  <h4>Acute Mesenteric Ischemia</h4>
                </Row>
                <Row className="mb-5">
                  <Image
                    className="p-1"
                    src="/publications/CommonCarotidArteryImbrication-thumb.png"
                    fluid
                  />
                </Row>

                <Row className="mb-3 p-2">
                  <p>
                    Acute mesenteric ischemia (AMI) refers to the sudden
                    reduction of intestinal perfusion, which can be due to
                    occlusive or nonocclusive obstruction of arterial or venous
                    blood flow. AMI is a potentially fatal vascular emergency
                    with overall mortality of 60% to 80%, and its reported
                    incidence is increasing [ 1–5 ]. Of those surviving, 20% to
                    60% develop short gut syndrome. The common end point in AMI
                    is a pathophysiologic process that results in bowel ischemia
                    and/ or necrosis. Despite advances in diagnosis and
                    treatment, the survival rate has not improved substantially
                    during the past 70 years due to continued difficulty in
                    recognizing the condition before bowel infarction occurs.
                    The clinical presentation is nonspecifi c in most cases.
                    Classically, AMI is characterized by severe pain out of
                    proportion to physical examination findings. Physical
                    examination does not reliably differentiate between ischemic
                    and infarcted bowel. Patients frequently present with
                    symptoms compatible with other diagnoses, such as ileus,
                    peritonitis, pancreatitis, or diverticulitis. The risk
                    factors for AMI and the clinical course differ depending on
                    the underlying etiology. As bowel ischemia progresses,
                    severe metabolic derangements ensue. If they are not
                    addressed early in the clinical course, they lead to a
                    series of events culminating in multiple organ dysfunction
                    and death. The timely use of diagnostic and therapeutic
                    methods to quickly restore blood fl ow is paramount in
                    reducing the high mortality rate associated with AMI.
                  </p>
                </Row>
                <Row className="justify-content-between">
                  <Button href="/publications/Acute-Mesenteric-Ischemia.pdf">
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

export default MesentericIschemia;
