import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HEADER_LOGO from "./img/HEADER_LOGO.png";
function Header() {
  return (
    <div className="Header">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <img src={HEADER_LOGO} alt="Logo" id="headerLogo" />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
