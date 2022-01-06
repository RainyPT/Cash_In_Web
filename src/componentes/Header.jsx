import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import HEADER_LOGO from "./img/HEADER_LOGO.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Header() {
  const navigate = useNavigate();
  const redirectToHome = () => {
    return localStorage.getItem("userEmail")
      ? navigate("/expenses")
      : navigate("/");
  };
  const logout = () => {
    Cookies.remove("userToken");
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <div className="Header">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <img
              src={HEADER_LOGO}
              onClick={redirectToHome}
              alt="Logo"
              id="headerLogo"
            />
          </Col>
          <Col>
            {localStorage.getItem("userEmail") ? (
              <>
                <p>User: {localStorage.getItem("userEmail")}</p>
                <Button href="#" onClick={logout}>
                  Logout{" "}
                </Button>
              </>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
