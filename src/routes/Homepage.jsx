import React from "react";
import LOGO_UBI from "../componentes/img/LOGO_UBI.png";
import logoIW from "../componentes/img/logoIW.png";
import LOGO_DI from "../componentes/img/dilogo.png";
import CHICO_IMG from "../componentes/img/chico.jpeg";
import { Col, Container, Row, Button } from "react-bootstrap";
import PersonCard from "../componentes/PersonCard";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  const redirectToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="Homepage">
      <Container style={{ height: "100vh" }}>
        <Row>
          <Col md={6}>
            <p
              style={{
                fontWeight: "bold",
                color: "#f2b90c",
                fontSize: "1.5em",
              }}
            >
              Your favourite Money App
            </p>
            <p style={{ fontWeight: "bold", fontSize: "5.0em" }}>
              {" "}
              The Best Money App
            </p>
            <p style={{ color: "grey" }}>
              {" "}
              Lorem ipsum dolor sit{" "}
              <span style={{ color: "grey", fontWeight: "bold" }}>amet</span>,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et{" "}
              <span style={{ color: "grey", fontWeight: "bold" }}>
                dolore magna
              </span>{" "}
              aliqua.
            </p>

            <div style={{ width: "100px", textAlign: "center" }}>
              <Button
                style={{
                  width: "100px",
                  backgroundColor: "#f2b90c",
                  borderColor: "#f2b90c",
                }}
                onClick={redirectToRegister}
              >
                Register
              </Button>
              <a
                href="/login"
                style={{
                  color: "#f2b90c",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Or login here{" "}
              </a>
            </div>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <Container
              style={{
                backgroundColor: "white",
                boxShadow: "0px 2px 5px grey",
              }}
            >
              <Row>
                <Col>
                  <img
                    src={LOGO_UBI}
                    className="homepage-partner-logo"
                    alt="logo da ubi"
                  ></img>
                </Col>
                <Col>
                  <img
                    src={LOGO_DI}
                    className="homepage-partner-logo"
                    alt="logo da ubi"
                  ></img>
                </Col>
                <Col>
                  <img
                    src={logoIW}
                    className="homepage-partner-logo"
                    alt="logo da ubi"
                  ></img>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", padding: "50px" }}>
            <p
              style={{
                color: "#f2b90c",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              Made By
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <PersonCard
              name="Francisco Gonçalves"
              desc="Frontend Programmer"
              src={CHICO_IMG}
            />
          </Col>
          <Col>
            <PersonCard
              name="Renato Quelhas"
              desc="Frontend Programmer and Designer"
            />
          </Col>
          <Col>
            <PersonCard
              name="Duarte Gonçalves"
              desc="Frontend Programmer and Team Manager"
            />
          </Col>
          <Col>
            <PersonCard name="Daniela Martins" desc="Backend Programmer" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Homepage;
