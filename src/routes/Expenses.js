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
  editCategory,
  deleteCategory,
  deleteExpense,
  saveExpense,
  createCategory,
  searchExpense,
  editExpense,
} from "../ReqLib";
import { useNavigate } from "react-router-dom";

export default function Expensespage() {
  //Object Expense
  const navigate = useNavigate();
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
  const [getStatus, setGetStatus] = useState(false);
  const [SearchExpenseStatus, setSearchExpenseStatus] = useState(false);
  useEffect(() => {
    async function expenseGetting() {
      setCategoryArray(await getUserCategories());
      //setExpenseArray(await getUserExpenses());
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

    const res = await saveExpense(expense);
    if(res.status===200){

      alert("Expense Saved Successfully");
      setOpType(null);

    }else{alert("Something Went Wrong")}

  };

  const onEditCategory = async (id, reqOBJ) => {
    const res = await editCategory(id, reqOBJ);
    if (res.status === 200) {
      alert("Category Edited Successfully");
      setOpType(null);

    }else{alert("Something Went Wrong")}

  };

  const onDeleteCategory = async (id) => {
    const res = await deleteCategory(id);
    if (res.status === 200) {
      alert("Category Deleted Successfully");
      setOpType(null);
    } else {
      alert("Something Went Wrong");
    }
  };

  const onEditExpense = async (id,reqOBJ) => {

    const res= await editExpense(id,reqOBJ);
    if(res.status===200){

      alert("Category Edited Successfully");
      setOpType(null);

    }else{alert("Something Went Wrong")}

  };

  const onDeleteExpense = async (id) => {
    const res = await deleteExpense(id);
    if (res.status === 200) {
      alert("Expense Deleted Successfully");
      setOpType(null);
    } else {
      alert("Something Went Wrong");
    }
  };

  const onSearchExpense = async (nome) => {
    setExpenseArray(await searchExpense(nome));
    setSearchExpenseStatus(true);
  };
  const onCreateCategory = async () => {
    const res = await createCategory(category);
    console.log(await createCategory(category));

    if(res.ack===0){

      alert("Category Edited Successfully");
      setOpType(null);

    }else{alert("Something Went Wrong")}
  };

  const findCategory = (ArrayOBJ,id) =>{
    const found = ArrayOBJ.filter( (ArrayOBJ) => {

      if(ArrayOBJ.id == id){
        return true;
      }
    });
    return found;

  };

  return (
    <>
      <div className="Expensespage">
        <Container style={{ height: "100vh" }}>
          <Row>
            <Col>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#f2b90c",
                  padding: "20px",
                  borderColor: "#f2b90c",
                  marginBottom: "2%",
                }}
                onClick={() => navigate("/graphs")}
              >
                Go Back
              </Button>
            </Col>
            <Col>
              <Container>
                <Row>
                  <Col xs={8}>
                  <ButtonGroup
                      aria-label="Basic example"
                      style={{ width: "50vw" }}
                    >
                      <Button
                        variant="outline-warning"
                        style={{
                          borderColor:"#f2b90c",
                          padding: "20px",
                          marginBottom: "2%",
                        }}
                        onClick={() => selectItemType("Expenses")}
                      >
                        Expenses
                      </Button>
                      <Button
                      variant="outline-warning"
                        style={{
                          borderColor:"#f2b90c",
                          padding: "20px",
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
                                <Button
                                  style={{
                                    backgroundColor: "#f2b90c",
                                    borderColor: "#f2b90c",
                                    width: "10vw",
                                    height: "8vh",
                                    fontSize: "20px",
                                    fontWeight: "bolder",
                                  }}
                                  onClick={() => selectOpType("edit")}
                                >
                                  Edit
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

                    {opType === "edit" && itemType === "Expenses" ? (
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
                                  onChange={(e) =>
                                    setExpense({
                                      ...expense,
                                      name: e.target.value,
                                    })
                                  }
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
                                  expense.name.length > 0
                                    ? onSearchExpense(expense.name)
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
                              {SearchExpenseStatus ? (
                                expenseArray.data.map((c) => (
                                  <ListGroup.Item
                                    eventKey={c.id}
                                    action
                                    onClick={() => {
                                      selectOpType("searched");
                                      setExpense(c);
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
                      <></>
                    )}

                    {opType === "searched" && itemType === "Expenses" ? (
                      <>
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
                              <br></br>
                              <center>
                                <Button
                                  variant="outline-warning"
                                  style={{
                                    boxShadow: "inset 0px 0px 4px #F2B90C",
                                    padding: "15px",
                                  }}
                                  onClick={() => {
                                    onEditExpense(expense.id, expense);
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
                                    onDeleteExpense(expense.id);
                                  }}
                                >
                                  Delete Expense
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

                    {opType === "edit" && itemType === "Categories" ? (
                      <>
                        <Row>
                          <Col></Col>
                          <Col md={8} style={{ paddingTop: "10vh" }}>
                            <Form>
                              <center>
                                <DropdownButton
                                  as={ButtonGroup}
                                  align={{ lg: "end" }}
                                  title="Select Category"
                                  id="dropdown-menu-align-responsive-1"
                                  variant="outline-warning"
                                  onSelect={(e) => {
                                    setCategory({ id: e });
                                  }}
                                  style={{
                                    marginTop: "2vh",
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

                                <Form.Group
                                  className="mb-3"
                                  style={{ marginTop: "3vh" }}
                                >
                                  <Form.Control
                                    type="text"
                                    placeholder="Edit Category name"
                                    onChange={(e) =>
                                      setCategory({
                                        ...category,
                                        name: e.target.value,
                                      })
                                    }
                                  />
                                </Form.Group>

                                <Container style={{ marginTop: "10vh" }}>
                                  <Button
                                    variant="outline-warning"
                                    style={{
                                      boxShadow: "inset 0px 0px 4px #F2B90C",
                                      padding: "15px",
                                    }}
                                    onClick={() => {
                                      onEditCategory(category.id, category);
                                    }}
                                  >
                                    Edit Category
                                  </Button>

                                  <Button
                                    variant="outline-danger"
                                    style={{
                                      marginLeft: "5vw",
                                      boxShadow: "inset 0px 0px 4px red",
                                      padding: "15px",
                                    }}
                                    onClick={() => {
                                      onDeleteCategory(category.id);
                                    }}
                                  >
                                    Delete Category
                                  </Button>
                                </Container>
                              </center>
                            </Form>
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
