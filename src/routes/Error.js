import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Error() {
  const navigate = useNavigate();
  const redirectToExpenses = () => {
    navigate("/expenses");
  };
  return (
    <div className="App">
      <Container style={{ margin: "auto", textAlign: "center" }}>
        <Row>
          <Col></Col>
          <Col>
            <h1>PAGE NOT FOUND</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button
              style={{
                width: "100px",
                backgroundColor: "#f2b90c",
                borderColor: "#f2b90c",
              }}
              onClick={redirectToExpenses}
            >
              Go Back
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
