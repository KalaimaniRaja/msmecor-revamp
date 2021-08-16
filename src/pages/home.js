import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Yellow from "../assets/img/yellow.png";
import Green from "../assets/img/green.png";
import Orange from "../assets/img/orange.png";
import Client1 from "../assets/img/BOT.png";
import Client2 from "../assets/img/DAYSON.png";
import Client3 from "../assets/img/emp.png";
import Client4 from "../assets/img/Insituform.png";
import Client5 from "../assets/img/TW.png";

class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="main-banner py-4 py-md-5">
          <div className="container py-md-4 py-lg-5">
            <Row>
              <Col
                className="banner-content"
                xs={{ span: 24 }}
                md={{ span: 16 }}
                lg={{ span: 9 }}
              >
                <h2>SIMPLIFYING SAFETY</h2>
                <p>
                  MSM eCOR’s complete cloud based OHS software will allow you to
                  improve your Organization’s compliance & accountability.
                  Simplify your Health & Safety Management System by using our
                  custom Risk Assessment Tool that you can monitor in real-time.
                </p>
                <div className="my-3">
                  <Link to="/login" className="btn btn-primary">
                    Request a DEMO
                  </Link>
                  <Link to="/login" className="ms-3 btn btn-secondary">
                    Request a DEMO
                  </Link>
                </div>
                <span>
                  Want to create an account?
                  <Link to="/login" className="ms-2">
                    Get started
                  </Link>
                </span>
              </Col>
            </Row>
          </div>
        </div>

        <div className="main-info my-lg-4 py-4 py-md-5">
          <div className="container">
            <Row type="flex" justify="center" className="text-center">
              <Col xs={{ span: 24 }} lg={{ span: 8 }} className="p-3">
                <div className="main-info-list h-100">
                  <img src={Yellow} alt="" className="mb-3" />
                  <h3>OH&S Prequalification Programs</h3>
                  <p>
                    COR® is an OHS prequalification requirement for many
                    municipal & provincial government construction projects and
                    without the proper HSMS getting COR® can be very time
                    consuming and complicated. MSM eCOR is here to help. Contact
                    us today to get on the right Path to COR®.
                  </p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 8 }} className="p-3">
                <div className="main-info-list h-100">
                  <img src={Green} alt="" className="mb-3" />
                  <h3>OH&S Prequalification Programs</h3>
                  <p>
                    COR® is an OHS prequalification requirement for many
                    municipal & provincial government construction projects and
                    without the proper HSMS getting COR® can be very time
                    consuming and complicated. MSM eCOR is here to help. Contact
                    us today to get on the right Path to COR®.
                  </p>
                </div>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 8 }} className="p-3">
                <div className="main-info-list h-100">
                  <img src={Orange} alt="" className="mb-3" />
                  <h3>Stop Chasing Documentation</h3>
                  <p>
                    Our Ready to Use OHS software was designed by safety with
                    the sole purpose to manage your data which allows you the
                    time to focus on what is important within your HSMS. Our
                    cost savings solution will support any complexity within
                    your HSMS.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="client-info my-lg-4 py-4">
          <div className="container">
            <Row type="flex" justify="center" className="text-center">
              <Col
                xs={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 4 }}
                className="p-3"
              >
                <div className="client-info-list h-100 d-flex align-items-center justify-content-center">
                  <img src={Client1} alt="" />
                </div>
              </Col>
              <Col
                xs={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 4 }}
                className="p-3"
              >
                <div className="client-info-list h-100 d-flex align-items-center justify-content-center">
                  <img src={Client2} alt="" />
                </div>
              </Col>
              <Col
                xs={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 4 }}
                className="p-3"
              >
                <div className="client-info-list h-100 d-flex align-items-center justify-content-center">
                  <img src={Client3} alt="" />
                </div>
              </Col>
              <Col
                xs={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 4 }}
                className="p-3"
              >
                <div className="client-info-list h-100 d-flex align-items-center justify-content-center">
                  <img src={Client4} alt="" />
                </div>
              </Col>
              <Col
                xs={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 4 }}
                className="p-3"
              >
                <div className="client-info-list h-100 d-flex align-items-center justify-content-center">
                  <img src={Client5} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="video-wrap mt-lg-4 py-4 py-md-5">
          <div className="video-link">
            <div className="container">
              <Row type="flex" justify="center" className="text-center">
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 8 }}
                  className="mb-2 mb-lg-0"
                >
                  <label>In the News:</label>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  className="my-1 my-lg-0"
                >
                  <Link to="/login">MSM eCOR in Electrical line</Link>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                  <Link to="/login">MSM eCOR - PCMHA Covid Screening</Link>
                </Col>
              </Row>
            </div>
          </div>

          <div className="video-inner-wrap mt-4 mt-md-5">
            <div className="container">
              <Row>
                <Col
                  xs={{ span: 24 }}
                  md={{ span: 18 }}
                  xl={{ span: 14 }}
                  className="m-auto"
                >
                  <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMSMeCOR%2Fvideos%2F680613132520752%2F&show_text=false"></iframe>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className="request-info text-center py-4 py-md-5">
          <div className="container py-md-3">
            <Row type="flex" justify="center">
              <Col>
                <h2>Try out MSM eCOR today.</h2>
                <p>
                  Schedule a personal walkthrough to see the impact our software
                  can have on your business.
                </p>
                <Link to="/request" className="btn btn-secondary">
                  Request a DEMO
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
