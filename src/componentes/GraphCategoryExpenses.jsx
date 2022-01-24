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
import {
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
  Form,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import CustomTooltip from "./GraphsCustomTooltip";
import { getExpensesFromCategoryByDate, getUserCategories } from "../ReqLib";
const GraphCategoryExpensesComponent = () => {
  const [changeDates, setChangeDates] = useState({
    min: null,
    max: null,
  });
  const [categoryArray, setCategoryArray] = useState([]);
  const [expensesByCategoryArray, setExpensesByCategoryArray] = useState([]);
  const [category, setCategory] = useState("");
  async function getExpensesFromCategory_By_Date(date1, date2, categoryID) {
    await getExpensesFromCategoryByDate(date1, date2, categoryID)
      .then((res) => setExpensesByCategoryArray(res.data))
      .catch((e) => alert(e));
  }
  async function getAllCategories() {
    await getUserCategories()
      .then((res) => setCategoryArray(res.data))
      .catch((e) => alert(e));
  }
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
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
                      title={category !== "" ? category : "Select Category"}
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
                        <Dropdown.Item disabled>No Categories</Dropdown.Item>
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
            <div className="Graph" style={{ height: "100%", width: "100%" }}>
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
  );
};
export default GraphCategoryExpensesComponent;
