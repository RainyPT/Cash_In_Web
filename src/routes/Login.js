import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../ReqLib";
import { useState } from "react";
import Cookies from "js-cookie";
export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const onClickLogin = async () => {
    let res = await login({ email: email, password: password });
    if (res.ack === 0) {
      alert(res.message);
      return;
    }
    console.log(res);
    Cookies.set("isLogged", res.data.user.id, { expires: 60 * 60 * 24 });
    navigate("/expenses");
  };
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>
              <Form.Floating>
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
                onClick={onClickLogin}
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
