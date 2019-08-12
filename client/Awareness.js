import React, { Component, Fragment } from 'react';
import { Container, Col, Figure, Row } from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
// import patientEnglish from '..public/patientEnglish';

class Awareness extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = document => {
    const { numPages } = document;
    this.setState({
      numPages,
      pageNumber: 1
    });
  };

  changePage = offset =>
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + offset
    }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  render() {
    const { numPages, pageNumber } = this.state;

    return (
      <Fragment>
        <Container className="d-flex flex-row pt-5 mt-5">
          {/* <Figure>
            <object
              data="/PAD_Patient_English_1.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p>
                Your browser does not support PDFs.
                <a href="/PAD_Patient_English_1.pdf">Download the PDF</a>.
              </p>
            </object>
          </Figure> */}
          <Document
            file="..public/patientEnglish.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div>
            <p>
              Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={this.previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={this.nextPage}
            >
              Next
            </button>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Awareness;
