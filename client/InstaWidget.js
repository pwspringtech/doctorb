import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Feed from 'react-instagram-authless-feed';
import Container from 'react-bootstrap/Container';

class Instagram extends React.Component {
  render() {
    return (
      <Container>
        <Row style={{ justifyContent: 'center' }}>
          <Col md={12} className='shadow' style={{ border: `2px solid #74b4ca`, paddingBottom: 30, paddingRight: 20 }}>
            <p style={{ fontSize: '20px', marginTop: 10, marginLeft: 8 }}>
              Instagram
              <a
                style={{ fontSize: '14px', marginLeft: 6 }}
                href='https://www.instagram.com/thevasculardr/'
                target='_blank'>
                <i>@thevasculardr</i>
              </a>
            </p>
            <hr />
            <Feed userName='thevasculardr' className='Feed' classNameLoading='Loading' limit={7} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Instagram;
