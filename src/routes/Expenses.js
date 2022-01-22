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

/*
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
  
}
*/
export default function Expensespage() {
  //Object Expense
  const [expense, setExpense] = useState({
    name: "",
    value: null,
    date: null,
    category: "",
  });
  //Object Categories
  const [category, setCategory] = useState({ name: "", main_category: "" });

  //UI Storage
  const [itemType, setItemType] = useState("Expenses");
  const [opType, setOpType] = useState(null);
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
    console.log(expense);
    await saveExpense(expense);
  };
  const onCreateCategory = async () => {
    await createCategory(category);
  };
  return (
    <>
      <div className="Expensespage">
        <Container style={{ height: "100vh" }}>
          <Row>
            <Col></Col>
            <Col>
              <Container>
                <Row>
                  <Col xs={8}>
                    <ButtonGroup
                      aria-label="Basic example"
                      style={{ width: "50vw" }}
                    >
                      <Button
                        variant="secondary"
                        style={{
                          backgroundColor: "#f2b90c",
                          padding: "20px",
                          borderColor: "#f2b90c",
                          marginBottom: "2%",
                        }}
                        onClick={() => selectItemType("Expenses")}
                      >
                        Expenses
                      </Button>
                      <Button
                        variant="secondary"
                        style={{
                          backgroundColor: "#f2b90c",
                          padding: "20px",
                          borderColor: "#f2b90c",
                          marginBottom: "2%",
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
                      <Col>
                        <Container>
                          <Row>
                            <center>
                              <Col md={8} style={{ paddingTop: "3vh" }}>
                                <Button
                                  style={{
                                    backgroundColor: "#f2b90c",
                                    borderColor: "#f2b90c",
                                    width: "10vw",
                                    height: "8vh",
                                    fontSize: "20px",
                                    fontWeight: "bolder",
                                  }}
                                  onClick={() => selectOpType("add")}
                                >
                                  Add
                                </Button>
                              </Col>
                            </center>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                    {opType === "add" && itemType === "Expenses" ? (
                      <>
                        <Row>
                          <Col></Col>
                          <Col md={8} style={{ paddingTop: "10vh" }}>
                            <Form>
                              <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
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
                                <Form.Label>Value(€)</Form.Label>
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
                                <Form.Label>Value</Form.Label>
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
                              <DropdownButton
                                as={ButtonGroup}
                                align={{ lg: "end" }}
                                title="Categories"
                                id="dropdown-menu-align-responsive-1"
                                variant="warning"
                                style={{
                                  marginBottom: "10vh",
                                }}
                              >
                                {getStatus ? (
                                  expenseArray.data.map((c) => (
                                    <Dropdown.Item eventKey={c.id}>
                                      {c.name}
                                    </Dropdown.Item>
                                  ))
                                ) : (
                                  <Dropdown.Item disabled>
                                    No Categories
                                  </Dropdown.Item>
                                )}
                              </DropdownButton>
                              <br></br>
                              <center>
                                <Button
                                  variant="outline-warning"
                                  style={{
                                    boxShadow: "inset 0px 0px 4px #F2B90C",
                                    padding: "15px",
                                  }}
                                  onClick={onSaveExpense}
                                >
                                  Save Expense
                                </Button>
                              </center>
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
                        <Row></Row>
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
                        <Row></Row>
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
                          <Col></Col>
                          <Col md={8} style={{ paddingTop: "10vh" }}>
                            <Form>
                              <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Category name"
                                  onChange={(e) =>
                                    setCategory({
                                      name: e.target.value,
                                      main_category: 0,
                                    })
                                  }
                                />
                              </Form.Group>
                              <DropdownButton
                                as={ButtonGroup}
                                align={{ lg: "end" }}
                                title="Categories"
                                id="dropdown-menu-align-responsive-1"
                                variant="warning"
                                style={{
                                  marginBottom: "10vh",
                                }}
                              >
                                {getStatus ? (
                                  categoryArray.data.map((c) => (
                                    <Dropdown.Item eventKey={c.id}>
                                      {c.name}
                                    </Dropdown.Item>
                                  ))
                                ) : (
                                  <Dropdown.Item disabled>
                                    No Categories
                                  </Dropdown.Item>
                                )}
                              </DropdownButton>
                              <center>
                                <Button
                                  variant="outline-warning"
                                  style={{
                                    boxShadow: "inset 0px 0px 4px #F2B90C",
                                    padding: "15px",
                                  }}
                                  onClick={onCreateCategory}
                                >
                                  Create Category
                                </Button>
                              </center>
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
