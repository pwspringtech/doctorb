import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TwitterDisplay extends Component {

    componentDidMount() {
        window.twttr = (function(d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0],
              t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function(f) {
              t._e.push(f);
            };
            return t;
          }(document, 'script', 'twitter-wjs'))
    }

    render() {
        return (
            <Container>
                <Row>
                    {/* Use 'md=' to determine the width of the Twitter widget for computer screens */}
                    <Col md={3}>
                        <a className="twitter-timeline" href="https://twitter.com/VascularDr?ref_src=twsrc%5Etfw" data-height="720">Tweets by VascularDr</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TwitterDisplay;
