import { Col, Container, Row, Button, Form } from "react-bootstrap";
function RegisterComp() {
  return (
    <div className="RegisterComp">
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
                Register
              </h2>
              <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
                <Row>
                  <Col>
                    <Form.Control type="text" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Surname" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                style={{ backgroundColor: "#f2b90c", borderColor: "#f2b90c","margin-top":"20px" }}
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
export default RegisterComp;
