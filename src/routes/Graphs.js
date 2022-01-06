import {
  Card,
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
} from "react-bootstrap";
export default function Graphspage() {
  return (
    <div className="Graphspage">
      <Container style={{ height: "100vh" }}>
        <Row>
          <Col md={3}>
            <div className="containerGraphs">
              <center>
                <p className="miniTitles">Recent Activity</p>
              </center>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 0.5 }}>
            <div className="containerGraphs">
              <center>
                <p className="miniTitles">Anual Expenses</p>
              </center>
            </div>
          </Col>

          <Col>
            <center>
              <p className="textAddNews">Add News</p>
              <button className="doubleButton" id="buttonAddNews">
                +
              </button>
            </center>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <div className="containerExpenses" id="containerGraph"></div>
        </Row>
      </Container>
    </div>
  );
}
