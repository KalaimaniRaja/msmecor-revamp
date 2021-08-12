import React from "react";
import { Row, Col } from "antd";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="main-banner py-4 py-md-5 my-4 my-md-5">
          <div className="container py-md-5">
            <Row>
              <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 12 }}>
                <h2>SIMPLIFYING SAFETY</h2>
                <p>
                  MSM eCOR’s complete cloud based OHS software will allow you to
                  improve your Organization’s compliance & accountability.
                  Simplify your Health & Safety Management System by using our
                  custom Risk Assessment Tool that you can monitor in real-time.
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="container py-md-5">
          <Row>
            <Col>
              <h2>Try out MSM eCOR today.</h2>
              <p>
                Schedule a personal walkthrough to see the impact our software
                can have on your business.
              </p>
              <Router>
              <Link to="/register"></Link>
              </Router>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
