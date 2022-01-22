import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import HEADER_LOGO from "./img/HEADER_LOGO.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { hover } from "@testing-library/user-event/dist/hover";
function Header() {
  const navigate = useNavigate();
  const redirectToHome = () => {
    return Cookies.get("userToken") ? navigate("/expenses") : navigate("/");
  };
  const logout = () => {
    Cookies.remove("userToken");
    localStorage.removeItem("userID");
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
          <Col
            style={{
              paddingTop: "6vh",
            }}
          >
            {Cookies.get("userToken") ? (
              <>
                <Button
                  href="#"
                  style={{
                    backgroundColor: "#F2B90C",
                    borderColor: "#F2B90C",
                    padding: "10px",
                  }}
                  onClick={logout}
                >
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
