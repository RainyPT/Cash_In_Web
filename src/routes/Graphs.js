import {
  Card,
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
  ListGroup,
  Badge,
  Form,
} from "react-bootstrap";
import { getExpensesByDate, getUserCategories } from "../ReqLib";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "hsla(0, 0%, 93%, 0.3)",
          padding: "5px",
          border: "2px solid white",
          borderRadius: "25px",
        }}
      >
        <p className="label">{"Name: " + payload[0].payload.name}</p>
        <p className="date">{"Date: " + payload[0].payload.date}</p>
        <p className="cost">{"Cost: " + payload[0].payload.value + "€"}</p>
      </div>
    );
  }

  return null;
};
export default function Graphspage() {
  const navigate = useNavigate();
  const [expenseArray, setExpenseArray] = useState(null);
  const [categoryArray, setCategoryArray] = useState(null);
  const [expensesByCategoryArray, setExpensesByCategoryArray] = useState(null);
  const [loadedExpenses, setLoadedExpenses] = useState(false);
  const [loadedCategories, setLoadedCategories] = useState(false);
  const [changeDates, setChangeDates] = useState({
    min: null,
    max: null,
  });
  async function getExpenses_By_Date(date1, date2) {
    if (date1 !== null && date2 !== null) {
      const res = await getExpensesByDate(date1, date2);
      if (res.status === 200) {
        setExpenseArray(res.data);
        if (res.data.length === 0) {
          alert("No Expenses!");
        }
        setLoadedExpenses(true);
      }
    }
  }
  async function getAllCategories() {
    const res = await getUserCategories();
    if (res.status === 200) {
      setCategoryArray(res.data);
      if (res.data.length === 0) {
        alert("Please add categories!");
      }
      setLoadedCategories(true);
    }
  }
  useEffect(() => {
    getAllCategories();
    getExpenses_By_Date("10-12-1997", "30-1-2023");
  }, []);
  return (
    <div className="Graphspage">
      <Container>
        <Row>
          <Col md={3}>
            <div className="containerGraphs">
              <center>
                <p className="miniTitles">Recent Activity</p>
              </center>

              <ListGroup
                as="ol"
                numbered
                style={{
                  height: "65vh",
                  marginTop: "2vh",
                  overflow: "scroll",
                  WebkitOverflowScrolling: "touch",
                  overflowX: "hidden",
                }}
              >
                {loadedExpenses ? (
                  expenseArray.map((c, id) => (
                    <ListGroup.Item
                      className="d-flex justify-content-between align-items-start"
                      key={id}
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{c.name}</div>
                      </div>
                      <Badge variant="primary" pill>
                        {c.value}
                      </Badge>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item
                    className="d-flex justify-content-between align-items-start"
                    disabled
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">No Expenses</div>
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
              <Container>
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <h3>Start Date</h3>
                    <Form.Group controlId="duedate">
                      <Form.Control
                        type="date"
                        name="beginDate"
                        placeholder="Begin Date"
                        max={changeDates.max}
                        onChange={(e) => {
                          setChangeDates({
                            ...changeDates,
                            min: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col style={{ textAlign: "center" }}>
                    <h3>End Date</h3>
                    <Form.Group controlId="duedate">
                      <Form.Control
                        type="date"
                        name="beginDate"
                        min={changeDates.min}
                        placeholder="End Date"
                        onChange={(e) => {
                          setChangeDates({
                            ...changeDates,
                            max: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      style={{ width: "100%" }}
                      onClick={() => {
                        getExpenses_By_Date(changeDates.min, changeDates.max);
                      }}
                    >
                      Get
                    </Button>
                  </Col>
                </Row>
              </Container>

              <div className="Graph">
                {loadedExpenses ? (
                  <LineChart
                    width={500}
                    height={300}
                    data={expenseArray}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Col>

          <Col>
            <center>
              <button
                className="addBtn"
                onClick={() => {
                  navigate("/expenses");
                }}
              >
                Add
              </button>
            </center>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="containerExpenses">
              <Container>
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <h3>Start Date</h3>
                    <Form.Group controlId="duedate">
                      <Form.Control
                        type="date"
                        name="beginDate"
                        placeholder="Begin Date"
                        max={changeDates.max}
                        onChange={(e) => {
                          setChangeDates({
                            ...changeDates,
                            min: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col style={{ textAlign: "center" }}>
                    <h3>End Date</h3>
                    <Form.Group controlId="duedate">
                      <Form.Control
                        type="date"
                        name="beginDate"
                        min={changeDates.min}
                        placeholder="End Date"
                        onChange={(e) => {
                          setChangeDates({
                            ...changeDates,
                            max: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <div className="Graph">
                    {loadedExpenses ? (
                      <LineChart
                        width={1000}
                        height={500}
                        data={expenseArray}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="value"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    ) : (
                      <></>
                    )}
                  </div>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
