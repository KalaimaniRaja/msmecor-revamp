import React from "react";
import { Row, Col } from "antd";
import PlayStore from "../assets/img/play-store.png";
import AppStore from "../assets/img/app-store.png";
import Logo from "../assets/img/logo.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-content py-4 py-md-5">
        <div className="container">
          <Row type="flex" align="middle" justify="center">
            <Col>
              <img className="logo" src={Logo} alt="" />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 12 }} className="text-md-end">
              <img src={PlayStore} alt="" />
            </Col>
            <Col md={{ span: 12 }} className="text-md-start">
              <img src={AppStore} alt="" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
