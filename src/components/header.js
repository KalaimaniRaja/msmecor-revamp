import React from "react";
import logo from "../assets/img/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100">
                <Nav.Link href="/requestdemo">Request A Demo</Nav.Link>
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
