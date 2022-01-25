import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { verifyEmail } from "../ReqLib";

export default function VerifyEmail() {
  const [userID, setUserID] = useState(0);
  const [hash, setHash] = useState("");
  const onClickHandle = async () => {
    await verifyEmail(userID, hash).then((res) => alert("User Verified!"));
  };
  return (
    <div className="AccountSettingsPage">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <div className="containerSettings">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>User ID</Form.Label>
                  <Form.Control
                    onChange={(e) => setUserID(e.target.value)}
                    type="number"
                    placeholder="User ID"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Hash</Form.Label>
                  <Form.Control
                    onChange={(e) => setHash(e.target.value)}
                    type="text"
                    placeholder="Hash"
                  />
                </Form.Group>
                <Button variant="primary" onClick={onClickHandle}>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
