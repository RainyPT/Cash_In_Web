import {
  Card,
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
  ListGroup,
  Form,
  Modal,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  getUserExpenses,
  getUserCategories,
  saveExpense,
  createCategory,
} from "../ReqLib";
import Expense from "../componentes/Expense";
import Category from "../componentes/Category";
export default function Expensespage() {
  const [itemType, setItemType] = useState("Expenses");
  const [opType, setOpType] = useState(null);
  const [expenseName, setExpenseName] = useState(null);
  const [expenseValue, setExpenseValue] = useState(null);
  const [expenseDate, setExpenseDate] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [expenseArray, setExpenseArray] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [getStatus, setGetStatus] = useState(false);
  useEffect(() => {
    async function expenseGetting() {
      setCategoryArray(await getUserCategories());
      setExpenseArray(await getUserExpenses());
      setGetStatus(true);
    }
    expenseGetting();
  }, []);
  const selectItemType = (type) => {
    setItemType(type);
    setOpType(null);
  };
  const selectOpType = (type) => {
    setOpType(type);
  };
  const onSaveExpense = async () => {
    await saveExpense({
      name: expenseName,
      value: expenseValue,
      date: expenseDate,
    });
  };
  const onCreateCategory = async () => {
    await createCategory({
      name: categoryName,
    });
  };
  const [selectedCat, setSelectedCat] = useState(null);
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Associate expense to a category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropdownButton
            alignRight
            title="Dropdown right"
            id="dropdown-menu-align-right"
            onSelect={(e) => {
              setSelectedCat(e);
            }}
          >
            {getStatus ? (
              categoryArray.data.map((c) => (
                <Dropdown.Item eventKey={c.id}>{c.name}</Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item disabled>No Categories</Dropdown.Item>
            )}
          </DropdownButton>
          {selectedCat !== null ? <p>You selected {selectedCat}</p> : <></>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
      <div className="Expensespage">
        <Container style={{ height: "100vh" }}>
          <Row>
            <Col></Col>
            <Col>
              <Container>
                <Row>
                  <Col></Col>
                  <Col xs={8}>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        style={{
                          backgroundColor: "#f2b90c",
                          borderColor: "#f2b90c",
                          marginBottom: "5%",
                        }}
                        onClick={() => selectItemType("Expenses")}
                      >
                        Expenses
                      </Button>
                      <Button
                        variant="secondary"
                        style={{
                          backgroundColor: "#f2b90c",
                          borderColor: "#f2b90c",
                          marginBottom: "5%",
                        }}
                        onClick={() => selectItemType("Categories")}
                      >
                        Categories
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Col>

            <Col></Col>
          </Row>
          <Container>
            <Row>
              <Col></Col>
              <Col xs={8}>
                <div className="containerExpenses">
                  <Container>
                    <Row>
                      {" "}
                      <Col></Col>
                      <Col>
                        <Container>
                          <Row>
                            <Col></Col>
                            <Col md={8}>
                              <Button
                                style={{
                                  backgroundColor: "#f2b90c",
                                  borderColor: "#f2b90c",
                                }}
                                onClick={() => selectOpType("add")}
                              >
                                ➕
                              </Button>
                            </Col>
                            <Col></Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col></Col>
                    </Row>
                    {opType === "add" && itemType === "Expenses" ? (
                      <>
                        <Row>
                          <Col style={{ textAlign: "center" }}>Add Expense</Col>
                        </Row>
                        <Row>
                          <Col></Col>
                          <Col md={8}>
                            <Form>
                              <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Expense name"
                                  onChange={(e) =>
                                    setExpenseName(e.target.value)
                                  }
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Value(€)</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="Expense value"
                                  onChange={(e) =>
                                    setExpenseValue(e.target.value)
                                  }
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Value</Form.Label>
                                <Form.Control
                                  type="date"
                                  placeholder="Expense date"
                                  onChange={(e) =>
                                    setExpenseDate(e.target.value)
                                  }
                                />
                              </Form.Group>
                              <Button variant="primary" onClick={onSaveExpense}>
                                Save Expense
                              </Button>
                            </Form>
                          </Col>
                          <Col></Col>
                        </Row>
                      </>
                    ) : (
                      <></>
                    )}
                    {opType == null && itemType === "Expenses" ? (
                      <>
                        <Row>
                          <Col style={{ textAlign: "center" }}>
                            Latest Expenses
                          </Col>
                        </Row>
                        <Row>
                          <Col></Col>
                          <Col md={8}>
                            <ListGroup
                              defaultActiveKey="#link1"
                              style={{
                                maxHeight: "80vh",
                                overflow: "scroll",
                                overflowX: "hidden",
                              }}
                            >
                              {getStatus ? (
                                expenseArray.data.map((e) => (
                                  <div onClick={() => setShowModal(!showModal)}>
                                    <Expense
                                      key={e.id}
                                      name={e.name}
                                      value={e.value}
                                      date={e.date}
                                    />
                                  </div>
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
                      <></>
                    )}
                    {opType == null && itemType === "Categories" ? (
                      <>
                        <Row>
                          <Col style={{ textAlign: "center" }}>
                            Existing Categories
                          </Col>
                        </Row>
                        <Row>
                          <Col></Col>
                          <Col md={8}>
                            <ListGroup
                              defaultActiveKey="#link1"
                              style={{
                                maxHeight: "80vh",
                                overflow: "scroll",
                                overflowX: "hidden",
                              }}
                            >
                              {getStatus ? (
                                categoryArray.data.map((c) => (
                                  <Category key={c.id} name={c.name} />
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
                      <></>
                    )}
                    {opType === "add" && itemType === "Categories" ? (
                      <>
                        <Row>
                          <Col style={{ textAlign: "center" }}>
                            Create Category
                          </Col>
                        </Row>
                        <Row>
                          <Col></Col>
                          <Col md={8}>
                            <Form>
                              <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Category name"
                                  onChange={(e) =>
                                    setCategoryName(e.target.value)
                                  }
                                />
                              </Form.Group>
                              <Button
                                variant="primary"
                                onClick={onCreateCategory}
                              >
                                Create Category
                              </Button>
                            </Form>
                          </Col>
                          <Col></Col>
                        </Row>
                      </>
                    ) : (
                      <></>
                    )}
                  </Container>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}
