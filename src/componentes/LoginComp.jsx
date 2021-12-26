import { Col, Container, Row, Button, Form } from "react-bootstrap";
import React from "react";
function LoginComp() {
  return (
    <div className="LoginComp">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form
              style={{
                backgroundColor: "white",
                borderRadius: "5%",
                boxShadow: "0px 2px 5px grey",
                padding: "20px",
              }}
            >
              <h2 style={{ "text-align": "center", "margin-bottom": "20px" }}>
                Login
              </h2>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>
              <Form.Floating>
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
              </Form.Floating>
              <Button
                style={{
                  backgroundColor: "#f2b90c",
                  borderColor: "#f2b90c",
                  "margin-top": "20px",
                }}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
export default LoginComp;
