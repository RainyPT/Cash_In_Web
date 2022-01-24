import {
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
  ListGroup,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { editExpense, deleteExpense } from "../ReqLib";
import { useEffect, useState } from "react";

const EditExpense = ({ SelectedExpense }) => {
  const [expense, setExpense] = useState({ name: "", value: "", date: null });
  const onEditExpense = async (id, reqOBJ) => {
    const res = await editExpense(id, reqOBJ);
    if (res.status === 200) {
      alert("Expense Edited Successfully");
    } else {
      alert("Something Went Wrong");
    }
  };

  const onDeleteExpense = async (id) => {
    const res = await deleteExpense(id);
    if (res.status === 200) {
      alert("Expense Deleted Successfully");
    } else {
      alert("Something Went Wrong");
    }
  };
  return (
    <Row>
      <Col></Col>
      <Col md={8} style={{ paddingTop: "10vh" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Edit Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Expense name"
              onChange={(e) =>
                setExpense({
                  ...expense,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Edit Value (€)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Expense value"
              onChange={(e) =>
                setExpense({
                  ...expense,
                  value: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Edit Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Expense date"
              onChange={(e) =>
                setExpense({
                  ...expense,
                  date: e.target.value,
                })
              }
            />
          </Form.Group>
          <center>
            <Button
              variant="outline-warning"
              style={{
                boxShadow: "inset 0px 0px 4px #F2B90C",
                padding: "15px",
              }}
              onClick={() => {
                onEditExpense(SelectedExpense.id, expense);
              }}
            >
              Edit Expense
            </Button>

            <Button
              variant="outline-danger"
              style={{
                marginLeft: "5vw",
                boxShadow: "inset 0px 0px 4px red",
                padding: "15px",
              }}
              onClick={() => {
                onDeleteExpense(SelectedExpense.id);
              }}
            >
              Delete Expense
            </Button>
          </center>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
};
export default EditExpense;
