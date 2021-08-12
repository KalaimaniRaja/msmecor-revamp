import React from "react";
import logo from "../assets/img/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar expand="lg">
          <Container>
            <Link to="/">
              <img src={logo} />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100">
                <Nav.Link href="/request">Request A Demo</Nav.Link>
                <Nav.Link href="/login" className="btn btn-primary ms-auto">
                  login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
