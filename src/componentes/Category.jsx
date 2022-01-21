import { Col, Container, Row } from "react-bootstrap";
function Category(props) {
  return (
    <div className="Category">
      <Container>
        <Row>
          <Col></Col>
          <Col style={{ textAlign: "center" }}>
            <h1>{props.name}</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Category;
