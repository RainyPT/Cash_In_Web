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
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import {
  getExpensesByDate,
  getExpensesFromCategoryByDate,
  getUserCategories,
} from "../ReqLib";
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
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
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
  const [expenseArray, setExpenseArray] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const [expensesByCategoryArray, setExpensesByCategoryArray] = useState([]);
  const [changeDates, setChangeDates] = useState({
    min: null,
    max: null,
  });
  const [category, setCategory] = useState("");
  async function getExpenses_By_Date(date1, date2) {
    await getExpensesByDate(date1, date2).then((res) =>
      setExpenseArray(res.data)
    );
  }
  async function getAllCategories() {
    await getUserCategories()
      .then((res) => setCategoryArray(res.data))
      .catch((e) => alert(e));
  }
  async function getExpensesFromCategory_By_Date(date1, date2, categoryID) {
    await getExpensesFromCategoryByDate(date1, date2, categoryID)
      .then((res) => setExpensesByCategoryArray(res.data))
      .catch((e) => alert(e));
  }
  useEffect(() => {
    getAllCategories();
    getExpenses_By_Date("10-12-1997", "30-1-2023");
  }, []);
  return (
    <div className="Graphspage">
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ height: "10vh" }}></div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="containerGraphs" style={{ height: "100%" }}>
              <center>
                <p className="miniTitles">Recent Activity</p>
              </center>

              <ListGroup
                as="ol"
                numbered
                style={{
                  marginTop: "2vh",
                  cursor: "pointer",
                  maxHeight: "500px",
                  WebkitOverflowScrolling: "touch",
                  overflowX: "hidden",
                }}
              >
                {expenseArray.length > 0 ? (
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
                    <Badge bg="warning" pill>
                      no value
                    </Badge>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </div>
          </Col>
          <Col md={9}>
            <div className="containerGraphs">
              <Container>
                <Row>
                  <Col></Col>
                  <Col style={{ marginTop: "3vh" }}>
                    <h3 style={{ fontSize: "14px" }}>Start Date</h3>
                    <Form.Group controlId="duedate">
                      <Form.Control
                        type="date"
                        name="beginDate"
                        placeholder="Begin Date"
                        max={changeDates.max}
                        style={{ maxWidth: "14vw" }}
                        onChange={(e) => {
                          setChangeDates({
                            ...changeDates,
                            min: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col style={{ marginTop: "3vh" }}>
                    <h3 style={{ fontSize: "14px" }}>End Date</h3>
                    <Form.Group controlId="duedate">
                      <Form.Control
                        type="date"
                        name="beginDate"
                        min={changeDates.min}
                        style={{ maxWidth: "14vw" }}
                        placeholder="YYYY-MM-DD"
                        onChange={(e) => {
                          setChangeDates({
                            ...changeDates,
                            max: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <div className="Graph" style={{ marginTop: "5vh" }}>
                      {expenseArray.length > 0 ? (
                        <LineChart
                          width={600}
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
                    <Col>
                      <Container>
                        <Row>
                          <Col></Col>
                          <Col md={6}>
                            <Button
                              style={{
                                width: "100%",
                                marginTop: "7vh",
                                marginBottom: "7vh",
                              }}
                              variant="warning"
                              onClick={() => {
                                getExpenses_By_Date(
                                  changeDates.min,
                                  changeDates.max
                                );
                              }}
                            >
                              Get Graph
                            </Button>
                          </Col>
                          <Col></Col>
                        </Row>
                      </Container>
                    </Col>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ height: "10vh" }}></div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div
              className="containerExpenses"
              style={{ height: "100%", paddingBottom: "20px" }}
            >
              <Container>
                <Row>
                  <Col md={2}></Col>
                  <Col style={{ marginTop: "3vh" }}>
                    <h3 style={{ fontSize: "14px" }}>Start Date</h3>
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
                  <Col style={{ marginTop: "3vh" }}>
                    <h3 style={{ fontSize: "14px" }}>End Date</h3>
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
                  <Col md={2}></Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <Form>
                      <Container>
                        <Row>
                          <Col></Col>
                          <Col>
                            <DropdownButton
                              as={ButtonGroup}
                              title={
                                category !== "" ? category : "Select Category"
                              }
                              id="dropdown-menu-align-responsive-1"
                              variant="outline-warning"
                              size="lg"
                              onSelect={(e) => {
                                setCategory(e);
                              }}
                              style={{
                                marginTop: "2vh",
                                marginBottom: "2vh",
                              }}
                            >
                              {categoryArray.length > 0 ? (
                                categoryArray.map((c) => (
                                  <Dropdown.Item eventKey={c.name}>
                                    {c.name}
                                  </Dropdown.Item>
                                ))
                              ) : (
                                <Dropdown.Item disabled>
                                  No Categories
                                </Dropdown.Item>
                              )}
                            </DropdownButton>
                          </Col>
                          <Col></Col>
                        </Row>
                      </Container>
                    </Form>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col md={1}></Col>
                  <Col md={8}>
                    <div
                      className="Graph"
                      style={{ height: "100%", width: "100%" }}
                    >
                      {expensesByCategoryArray.length > 0 ? (
                        <LineChart
                          width={900}
                          height={500}
                          data={expensesByCategoryArray}
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
                  </Col>
                  <Col md={2}></Col>
                </Row>

                <Row>
                  <Col></Col>
                  <Col md={6}>
                    <Button
                      style={{
                        width: "100%",
                      }}
                      variant="warning"
                      onClick={() => {
                        getExpensesFromCategory_By_Date(
                          changeDates.min,
                          changeDates.max,
                          category
                        );
                      }}
                    >
                      Get Graph
                    </Button>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
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
            <div style={{ height: "10vh" }}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
