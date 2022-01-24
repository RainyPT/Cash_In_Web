import {
  Col,
  Row,
  Button,
  ButtonGroup,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { saveExpense } from "../ReqLib";
import { useState } from "react";
const AddExpenseComponent = ({ categoryArray }) => {
  const [expenseToCreate, setExpenseToCreate] = useState({
    name: "",
    value: null,
    date: null,
    category_name: "",
  });
  const onSaveExpense = async (e) => {
    e.preventDefault();
    const res = await saveExpense(expenseToCreate);
    if (res.status === 201) {
      alert("New Expense Added!");
    } else {
      alert("Something went wrong!");
    }
  };
  return (
    <Row>
      <Col></Col>
      <Col md={8} style={{ paddingTop: "10vh" }}>
        <Form onSubmit={onSaveExpense}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Expense name"
              onChange={(e) =>
                setExpenseToCreate({
                  ...expenseToCreate,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Value(€)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Expense value"
              onChange={(e) =>
                setExpenseToCreate({
                  ...expenseToCreate,
                  value: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Value</Form.Label>
            <Form.Control
              type="date"
              placeholder="Expense date"
              onChange={(e) =>
                setExpenseToCreate({
                  ...expenseToCreate,
                  date: e.target.value,
                })
              }
            />
          </Form.Group>
          <DropdownButton
            as={ButtonGroup}
            align={{ lg: "end" }}
            title={
              expenseToCreate.category_name !== ""
                ? expenseToCreate.category_name
                : "Select Category"
            }
            id="dropdown-menu-align-responsive-1"
            variant="warning"
            style={{
              marginBottom: "10vh",
            }}
            onSelect={(e) =>
              setExpenseToCreate({
                ...expenseToCreate,
                category_name: e,
              })
            }
          >
            {categoryArray.data.length > 0 ? (
              categoryArray.data.map((c) => (
                <Dropdown.Item eventKey={c.name}>{c.name}</Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item disabled>No Categories</Dropdown.Item>
            )}
          </DropdownButton>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description - Optional</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              onChange={(e) =>
                setExpenseToCreate({
                  ...expenseToCreate,
                  description: e.target.value,
                })
              }
            />
          </Form.Group>
          <br></br>
          <center>
            <Button
              variant="outline-warning"
              style={{
                boxShadow: "inset 0px 0px 4px #F2B90C",
                padding: "15px",
              }}
              type="submit"
            >
              Save Expense
            </Button>
          </center>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
};
export default AddExpenseComponent;
