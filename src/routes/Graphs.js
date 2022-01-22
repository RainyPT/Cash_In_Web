import {
  Card,
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { valor: 190, categorias: "Gato" },
  { valor: 205, categorias: "Cão" },
  { valor: 150, categorias: "Peixe" },
  { valor: 100, categorias: "Crocodilo" },
  { valor: 300, categorias: "Piça" },
];
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
              <div className="Graph">
                <LineChart width={500} height={400} data={data}>
                  <Line type="monotone" dataKey="valor" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="categorias" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </div>
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
