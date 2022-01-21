import { Col, Container, Row } from "react-bootstrap";
function Expense(props) {
  return (
    <div className="Expense">
      <Container>
        <Row>
          <Col>
            <p>Data:{props.date}</p>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <h1>{props.name}</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col style={{ textAlign: "center" }}>
            <h3>Valor:{props.value}€</h3>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Expense;
