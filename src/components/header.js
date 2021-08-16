import React from "react";
import logo from "../assets/img/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar className="py-3" expand="lg">
          <Container>
            <Link to="/">
              <img className="logo" src={logo} />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100">
                <Link to="/request" className="ms-lg-3">
                  Request A Demo
                </Link>
                <Link to="/login" className="btn btn-primary ms-auto">
                  login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
