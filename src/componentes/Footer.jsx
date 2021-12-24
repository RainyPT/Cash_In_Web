import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FOOTER_LOGO from "./img/FOOTER_LOGO.png";
function Footer(){
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col>
            <img src={FOOTER_LOGO} id="footerLogo" alt="footerLogo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="about-link" href="#">
              Contact us
            </a>
          </Col>
          <Col>
            <a className="about-link" href="#">
              Contact us
            </a>
          </Col>
          <Col>
            <a className="about-link" href="#">
              Contact us
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="about-link" href="#">
              Contact us
            </a>
          </Col>
          <Col>
            <a className="about-link" href="#">
              Contact us
            </a>
          </Col>
          <Col>
            <a className="about-link" href="#">
              Contact us
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
