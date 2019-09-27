import React, { Component, Fragment } from 'react';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <nav
          className="navbar fixed-top navbar-expand-lg  navbar-light bg-light"
          style={{
            borderStyle: 'solid',
            borderWidth: '2px 0px 2px 0px',
            borderColor: '#74b4ca',
            padding: 0,
            paddingRight: 5,
            paddingLeft: 5,
            // backgroundColor: '#f5f5f5',
            fontSize: 18,
            marginBottom: 20
          }}
        >
          <div className="container">
            <a className="navbar-brand" href="#about">
              <img
                src="/ToddBerlandMD_logo.png"
                height="70px"
                alt="Tood Berland, MD - Vascular Specialists"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <a className="nav-link" href="#about">
                    Home
                  </a>
                </li>
                <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <a className="nav-link" href="#specialties">
                    Specialties
                  </a>
                </li>
                <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <a className="nav-link" href="#publications">
                    Research & Publications
                  </a>
                </li>
                <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <a className="nav-link" href="#awareness">
                    Patient Awareness
                  </a>
                </li>
                <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <a className="nav-link" href="#show">
                    Sirius XM Show
                  </a>
                </li>
                <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
