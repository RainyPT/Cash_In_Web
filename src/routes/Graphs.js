import {
  Card,
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
  ListGroup,
  Badge
} from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 1000,
    teste: 3000,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    teste: 3000,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    teste: 3000,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    teste: 3000,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    teste: 3000,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    teste: 3000,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    teste: 3000,
    amt: 2100
  }
];
export default function Graphspage() {
  const [categoryArray, setCategoryArray] = useState([]);
  const [getStatus, setGetStatus] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="Graphspage">
      <Container style={{ height: "100vh" }}>
        <Row>
          <Col md={3}>
            <div className="containerGraphs">
              <center>
                <p className="miniTitles">Recent Activity</p>
              </center>

              <ListGroup as="ol" numbered>
              {getStatus ? (
                categoryArray.data.map((c) => (
                  <ListGroup.Item  className="d-flex justify-content-between align-items-start" eventKey={c.id}>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{c.name}</div>
                    </div>
                    <Badge variant="primary" pill>
                      {c.value}
                    </Badge>
                  </ListGroup.Item>
                  ))
                  ) : (
                    <ListGroup.Item  className="d-flex justify-content-between align-items-start" disabled>
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">no expense</div>
                    </div>
                    <Badge variant="primary" pill>
                      no value
                    </Badge>
                    </ListGroup.Item>
                    )}
               </ListGroup>

            </div>
          </Col>
          <Col md={{ span: 6, offset: 0.5 }}>
            <div className="containerGraphs">
              <center>
                <p className="miniTitles">Anual Expenses</p>
              </center>
              <div className="Graph">
              <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
      <Line yAxisId="right" type="monotone" dataKey="teste" stroke="red" />
    </LineChart>
              </div>
            </div>
          </Col>

          <Col>
            <center>
              <button className="addBtn" onClick={()=>{navigate("/expenses")}}>
                Add
              </button>
            </center>
          </Col>
        </Row>
      </Container>
      <Container>
          <div className="containerExpenses" id="containerGraph"></div>
      </Container>
    </div>
  );
}
