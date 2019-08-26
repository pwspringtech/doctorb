import React, { Component, Fragment } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const brochures = {
  english: [
    {
      href: 'brochures/PAD_Aware_Poster1_English.pdf',
      src: 'brochures/PAD-Poster1-Thumbnail.jpg'
    },
    {
      href: 'brochures/PAD_Aware_Poster2_English.pdf',
      src: 'brochures/PAD-Poster2-Thumbnail.jpg'
    },
    {
      href: 'brochures/PAD_Aware_Poster3_English.pdf',
      src: 'brochures/PAD-Poster3-Thumbnail.jpg'
    },
    {
      href: 'brochures/Symptoms_Checklist.pdf',
      src: 'brochures/Symptoms_Checklist_thumb.png'
    },
    {
      href: 'brochures/Artery-Anatomy-Flyer.pdf',
      src: 'brochures/Artery-Anatomy-Flyer-thumb.png'
    },
    {
      href: 'brochures/Diagnosis-and-Treatment-Flyer.pdf',
      src: 'brochures/Diagnosis-and-Treatment-Flyer_thumb.png'
    },
    {
      href: 'brochures/Fact-Sheet.pdf',
      src: 'brochures/Fact-Sheet-thumb.png'
    },
    {
      href: 'brochures/patient_English.pdf',
      src: 'brochures/patient_English_thumb.png'
    },
    {
      href: 'brochures/Angiosomes-Flyer.pdf',
      src: 'brochures/Angiosomes-Flyer-thumb.png'
    }
  ],
  chinese: [
    {
      href: 'brochures/Symptoms_Checklist_Chinese.pdf',
      src: 'brochures/Symptoms_Checklist_Chinese_thumb.png'
    },
    {
      href: 'brochures/Diagnosis-Treatment-Flyer_Chinese.pdf',
      src: 'brochures/Diagnosis-Treatment-Flyer_Chinese_thumb.png'
    },
    {
      href: 'brochures/Fact-Sheet-Chinese.pdf',
      src: 'brochures/Fact-Sheet-Chinese-thumb.png'
    },
    {
      href: 'brochures/patient_Chinese.pdf',
      src: 'brochures/patient_Chinese_thumb.png'
    }
  ],
  spanish: [
    {
      href: 'brochures/Symptoms_Checklist_Spanish.pdf',
      src: 'brochures/Symptoms_Checklist_Spanish_thumb.png'
    },
    {
      href: 'brochures/Diagnosis-Treatment-Flyer_Spanish.pdf',
      src: 'brochures/Diagnosis-Treatment-Flyer_Spanish_thumb.png'
    },
    {
      href: 'brochures/Fact-Sheet-Spanish.pdf',
      src: 'brochures/Fact-Sheet-Spanish-thumb.png'
    },
    {
      href: 'brochures/patient_Spanish.pdf',
      src: 'brochures/patient_Spanish_thumb.png'
    }
  ],
  russian: [
    {
      href: 'brochures/Symptoms_Checklist_Russian.pdf',
      src: 'brochures/Symptoms_Checklist_Russian_thumb.png'
    },
    {
      href: 'brochures/Diagnosis-Treatment-Flyer_Russian.pdf',
      src: 'brochures/Diagnosis-Treatment-Flyer_Russian_thumb.png'
    },
    {
      href: 'brochures/Fact-Sheet-Russian.pdf',
      src: 'brochures/Fact-Sheet-Russian-thumb.png'
    },
    {
      href: 'brochures/patient_Russian.pdf',
      src: 'brochures/patient_Russian_thumb.png'
    }
  ]
};

class Awareness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    };
  }

  handleChange = value => {
    this.setState({ language: value });
    console.log(this.state);
  };

  render() {
    const lang = this.state.language;
    return (
      <Fragment>
        <Container className="d-flex  flex-column  pt-5 mt-5" fluid>
          <Row className="justify-content-center mb-3">
            <ToggleButtonGroup
              type="radio"
              name="languages"
              onChange={this.handleChange}
            >
              <ToggleButton variant="info" value="english">
                English
              </ToggleButton>
              <ToggleButton variant="info" value="chinese">
                Chinese
              </ToggleButton>
              <ToggleButton variant="info" value="spanish">
                Spanish
              </ToggleButton>
              <ToggleButton variant="info" value="russian">
                Russian
              </ToggleButton>
            </ToggleButtonGroup>
          </Row>

          <Row className="justify-content-center ">
            {lang === 'english'
              ? brochures.english.map(el => (
                  <Col md={3} className="m-1" key={el.src}>
                    <Card className="shadow">
                      <Card.Link href={el.href}>
                        <Card.Img src={el.src} />
                      </Card.Link>
                    </Card>
                  </Col>
                ))
              : null}
            {lang === 'chinese'
              ? brochures.chinese.map(el => (
                  <Col md={3} className="m-1" key={el.src}>
                    <Card className="shadow">
                      <Card.Link href={el.href}>
                        <Card.Img src={el.src} />
                      </Card.Link>
                    </Card>
                  </Col>
                ))
              : null}
            {lang === 'spanish'
              ? brochures.spanish.map(el => (
                  <Col md={3} className="m-1" key={el.src}>
                    <Card className="shadow">
                      <Card.Link href={el.href}>
                        <Card.Img src={el.src} />
                      </Card.Link>
                    </Card>
                  </Col>
                ))
              : null}
            {lang === 'russian'
              ? brochures.russian.map(el => (
                  <Col md={3} className="m-1" key={el.src}>
                    <Card className="shadow">
                      <Card.Link href={el.href}>
                        <Card.Img src={el.src} />
                      </Card.Link>
                    </Card>
                  </Col>
                ))
              : null}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Awareness;
