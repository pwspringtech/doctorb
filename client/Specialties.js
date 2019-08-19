import React, { Component, Fragment } from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

class Specialties extends Component {
  constructor(props){
    super(props)
    this.state={
      defaultActiveKey: this.props.match.params.dak
    }
  }

  componentDidMount(){
    console.log(this.props.match.params)
    this.setState({ defaultActiveKey: this.props.match.params.dak})
    console.log(this.state.defaultActiveKey)
  }

  render() {
    return (
      <Fragment>
        <Container
          style={{ marginTop: "80px" }}
          className="d-flex flex-column"
          fluid
        >
          <Col className="m-2">
            <Row className="justify-content-center mt-4 mb-3">
              <h4> Dr. Todd Berland specializes in:</h4>
            </Row>

            <Row className="justify-content-center mb-3">
              <i>Click Below to Learn More</i>
            </Row>
          </Col>
          <Row className="justify-content-center mb-4">
            <Col xs="10" xl="6">
              <Accordion defaultActiveKey={this.state.defaultActiveKey}>
                <Card className="text-center">
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    <h5>Vascular Surgery</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        A diagnosis of vascular disease can be frightening.
                        Knowing that you are in the hands of a meticulous and
                        caring surgeon can help to put those fears to rest.
                        Although we are surgeons, the majority of the patients
                        that we evaluate are managed medically (without a
                        procedure) by prescribing interventions such as
                        medication and/or lifestyle modifications while we
                        monitor your condition for further progression.
                        Following a thorough physical exam, our physicians will
                        help coordinate your vascular care, arranging for any
                        vascular imaging tests (such as Duplex Ultrasound or CT
                        scan) that may be necessary in order to make an accurate
                        diagnosis and choose the best treatment.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h5>Endovascular Surgery</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        Endovascular surgery is an innovative, less invasive
                        procedure used to treat problems affecting the blood
                        vessels, such as an aneurysm, which is a swelling or
                        “ballooning” of the blood vessel. The surgery involves
                        making a small incision near each hip to access the
                        blood vessels. An endovascular graft, which is a special
                        fabric tube device framed with stainless steel
                        self-expanding stents, is inserted through the arteries
                        in a catheter, a long, narrow flexible tube, and
                        positioned inside the aorta. Once in place, the graft
                        expands and seals off the aneurysm, preventing blood
                        from flowing into the aneurysm. The graft remains in the
                        aorta permanently.
                      </p>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        In the past, this condition was treated by open surgery,
                        involving an incision in the side of the chest or
                        breastbone and a long recovery period. Patients
                        generally stay in the hospital for seven to 10 days
                        following open surgery and undergo a three-month
                        recovery.
                      </p>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        An alternative to open surgery, endovascular surgery
                        offers many advantages, including a shorter recovery
                        period, less discomfort, local or regional anesthesia
                        instead of general anesthesia, smaller incisions, less
                        stress on the heart and fewer risks for patients with
                        other medical conditions. This procedure may benefit
                        patients who need surgery but are at a high-risk of
                        complications because of other conditions.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h5>Peripheral Vascular Disease</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        Lower extremity arterial disease occurs when substances
                        in the blood called plaque build up in a leg artery,
                        creating a blockage. This is a serious condition,
                        because a lack of blood flow can result in chronic leg
                        pain and, when the disease is advanced, open sores, and
                        possibly amputation.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <h5>Angioplasty / Stenting</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        Angioplasty is used to widen areas within coronary
                        arteries that have become narrowed. In this procedure, a
                        thin flexible tube (catheter) which has a small
                        inflatable balloon at the tip is positioned within the
                        narrowed section of the artery. The balloon is inflated
                        for a short period of time to push the plaque back
                        against the wall of the artery so that blood can flow
                        better.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    <h5>Venous Disease</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        Chronic venous insufficiency occurs when valves in the
                        veins of the legs, which keep blood flowing toward the
                        heart, stop working properly. It can cause aching,
                        swelling, and cramping in the legs, as well as skin
                        color changes and varicose veins.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <h5>Peripheral Vascular Disease</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        NYU Langone was the first academic medical center to
                        receive accreditation for its Vein Center from the
                        InterSocietal Accreditation Commission, recognizing our
                        commitment to quality evaluation and care of patients
                        with vein disorders. Our world-renowned surgeons and
                        state-of-the-art facilities make the Vein Center at NYU
                        Langone one of the top facilities for treating vein
                        conditions. We are the only vein center in the tri-state
                        area that is part of a large academic medical center and
                        vascular surgeons from around the world come to NYU
                        Langone to learn our techniques.
                      </p>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        Our goal is to make your legs healthy and beautiful
                        again. And we do this without a hospital admission,
                        general anesthesia, or a lengthy recuperation period. We
                        use minimally invasive procedures, performed in the
                        office, and you can resume your normal activities
                        immediately or shortly after. We treat varicose veins,
                        spider veins, and reticular veins, as well as deep vein
                        thrombosis, venous ulcers, and other venous disorders.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    <h5>Deep Vein Thrombosis</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        Deep vein thrombosis, also known as DVT, is a blood clot
                        that forms in a vein, usually in a leg. Occasionally, a
                        clot may form in the pelvis or an arm. Left untreated,
                        it can lead to pulmonary embolism, a potentially
                        life-threatening condition in which one or more blood
                        clots break loose from a vein, travel through the
                        bloodstream, and block blood flow in one or both lungs.
                      </p>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        NYU Langone vascular specialists are experts at
                        recognizing and managing deep vein thrombosis. Our
                        doctors also help to prevent pulmonary embolism or a
                        recurrence of blood clots. At NYU Langone’s Venous
                        Thromboembolic Center (VTEC), our experts are working to
                        pioneer a new standard of care for diagnosis and
                        treatment of deep vein thrombosis. NYU Langone doctors
                        from multiple specialties assess people with the
                        condition and quickly deliver care.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="7">
                    <h5>Aortic Anuerysms</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        A potentially life-threatening bulge in the aorta, the
                        body’s largest artery. Treatment for an aortic aneurysm
                        can include watchful waiting, medication, or surgery.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="8">
                    <h5>Cerebrovascular Disease</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      <p
                        style={{
                          textIndent: "40px"
                        }}
                        className="lead"
                      >
                        A cerebrovascular disease is a vascular disease of the
                        cerebral circulation. Arteries supplying oxygen to the
                        brain are affected resulting in one of a number of
                        cerebrovascular diseases. Most commonly this is a stroke
                        or mini-stroke and sometimes can be a hemorrhagic
                        stroke.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="9">
                    <h5>Lymphedema</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="9">
                    <Card.Body />
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="10">
                    <h5>Renal and Mesenteric Arterial Disease</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="10">
                    <Card.Body />
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="11">
                    <h5>Dialysis Access</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="11">
                    <Card.Body />
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="12">
                    <h5>Thoracic Outlet Syndrome</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="12">
                    <Card.Body />
                  </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                  <Accordion.Toggle as={Card.Header} eventKey="12">
                    <h5>Pelvic Congestion Syndrome</h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="12">
                    <Card.Body />
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Specialties;
