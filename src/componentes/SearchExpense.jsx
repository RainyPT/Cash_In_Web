import { Col, Row, Button, ListGroup, Form } from "react-bootstrap";
import { searchExpense } from "../ReqLib";
import { useState } from "react";
import EditExpense from "./EditExpense";
const SearchExpenseComponent = () => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseArray, setExpenseArray] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const onSearchExpense = async (nome) => {
    await searchExpense(nome).then((res) => setExpenseArray(res.data));
  };
  return selectedExpense === null ? (
    <>
      <Row>
        <Col></Col>
        <Col md={8} style={{ paddingTop: "10vh" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Search Expense</Form.Label>
              <Form.Control
                type="text"
                placeholder="Expense name to search"
                onChange={(e) => setExpenseName(e.target.value)}
              />
            </Form.Group>
          </Form>
          <center>
            <Button
              variant="outline-warning"
              style={{
                boxShadow: "inset 0px 0px 4px #F2B90C",
                padding: "10px",
              }}
              onClick={() => {
                expenseName !== ""
                  ? onSearchExpense(expenseName)
                  : alert("Field Can't Be Empty");
              }}
            >
              Search
            </Button>
          </center>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <ListGroup
            style={{
              height: "40vh",
              width: "30vw",
              marginTop: "2vh",
              overflow: "scroll",
              WebkitOverflowScrolling: "touch",
              overflowX: "hidden",
            }}
          >
            {expenseArray.length > 0 ? (
              expenseArray.map((c, id) => (
                <ListGroup.Item
                  key={id}
                  eventKey={c.id}
                  action
                  onClick={() => {
                    setSelectedExpense(c);
                  }}
                >
                  {c.name}
                </ListGroup.Item>
              ))
            ) : (
              <></>
            )}
          </ListGroup>
        </Col>
        <Col></Col>
      </Row>
    </>
  ) : (
    <EditExpense SelectedExpense={selectedExpense} />
  );
};
export default SearchExpenseComponent;
