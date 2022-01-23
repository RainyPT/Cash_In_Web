import {
  Card,
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import { getExpensesByDate } from "../ReqLib";
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
  const [loadedObj, setLoadedObj] = useState({ initial_load: false });
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
        setLoadedObj({ ...loadedObj, initial_load: true });
      }
    }
  }
  useEffect(() => {
    getExpenses_By_Date("10-12-1997", "30-1-2023");
  }, []);
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
                {loadedObj.initial_load ? (
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
      </Container>

      <Container>
        <Row>
          <div className="containerExpenses" id="containerGraph"></div>
        </Row>
      </Container>
    </div>
  );
}
