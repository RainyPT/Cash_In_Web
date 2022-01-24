import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { register } from "../ReqLib";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const onClickRegister = async () => {
    const res = await register({
      name: firstName + " " + lastName,
      email: email,
      password: password,
      password_confirmation: password,
    });
    if (res.ack === 0) {
      alert(res.message);
      return;
    }
    navigate("/login");
  };
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
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Register
              </h2>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      id="formFirstName"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Surname"
                      id="formLastName"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                style={{
                  backgroundColor: "#f2b90c",
                  borderColor: "#f2b90c",
                  marginTop: "20px",
                }}
                variant="primary"
                onClick={onClickRegister}
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
