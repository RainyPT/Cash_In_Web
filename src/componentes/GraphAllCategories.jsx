import { useState, useEffect } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { convertDate } from "../Utils";
import CustomTooltip from "./GraphsCustomTooltip";
import { getExpensesByDate } from "../ReqLib";
const GraphAllCategoriesComponent = () => {
  const [changeDates, setChangeDates] = useState({
    min: null,
    max: null,
  });
  const [expenseArray, setExpenseArray] = useState([]);
  async function getExpenses_By_Date(date1, date2) {
    await getExpensesByDate(date1, date2).then((res) =>
      setExpenseArray(res.data)
    );
  }
  useEffect(() => {
    let twodaysago = new Date();
    twodaysago.setDate(twodaysago.getDate() - 1);
    let tomorow = new Date();
    tomorow.setDate(twodaysago.getDate() + 2);
    getExpenses_By_Date(convertDate(twodaysago), convertDate(tomorow));
  }, []);

  return (
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
                        getExpenses_By_Date(changeDates.min, changeDates.max);
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
  );
};
export default GraphAllCategoriesComponent;
