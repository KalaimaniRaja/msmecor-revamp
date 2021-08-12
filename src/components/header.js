import React from "react";
import logo from "../assets/img/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar expand="lg">
          <Container>
            <Router>
              <Link to="/">
                <img className="logo" src={logo} />
              </Link>
            </Router>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100">
                <Router>
                  <Link to="/request">Request A Demo</Link>
                  <Link to="/login" className="btn btn-primary ms-auto">
                    login
                  </Link>
                </Router>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
