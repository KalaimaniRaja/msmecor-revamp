import React from "react";
import { Row, Col } from "antd";
import PlayStore from "../assets/img/play-store.png";
import AppStore from "../assets/img/app-store.png";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-content py-4 py-md-5">
          <div className="container">
            <Row type="flex" align="middle" justify="center">
              <Col>
                <img className="logo" src={Logo} alt="" />
              </Col>
            </Row>
            <Row className="app-link mt-4" type="flex" justify="center">
              <Col md={{ span: 12 }} className="text-md-end pe-1">
                <Link to="/login">
                  <img src={PlayStore} alt="" />
                </Link>
              </Col>
              <Col md={{ span: 12 }} className="text-md-start ps-1">
                <Link to="/login">
                  <img src={AppStore} alt="" />
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
