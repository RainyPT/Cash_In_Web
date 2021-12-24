import { Col, Container, Row, Button, Form } from "react-bootstrap";
import LOGO_DI from "./img/dilogo.png";
function LoginComp() {
  return (
    <div className="LoginComp">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else ;) .
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button style={{"backgroundColor": "#f2b90c","borderColor": "#f2b90c"}} variant="primary" type="submit">
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
