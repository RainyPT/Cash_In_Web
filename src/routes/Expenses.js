import { Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getUserCategories } from "../ReqLib";
import { useNavigate } from "react-router-dom";
import EditCategoryComponent from "../componentes/EditCategory";
import SearchExpenseComponent from "../componentes/SearchExpense";
import AddCategoryComponent from "../componentes/AddCategory";
import AddExpenseComponent from "../componentes/AddExpense";

export default function Expensespage() {
  //Object Expense
  const navigate = useNavigate();

  //UI Storage
  const [itemType, setItemType] = useState("Expenses");
  const [opType, setOpType] = useState(null);
  const [categoryArray, setCategoryArray] = useState([]);
  useEffect(() => {
    async function expenseGetting() {
      setCategoryArray(await getUserCategories());
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
  return (
    <>
      <div className="Expensespage">
        <Container>
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
                          borderColor: "#f2b90c",
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
                          borderColor: "#f2b90c",
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
                      <AddExpenseComponent categoryArray={categoryArray} />
                    ) : (
                      <></>
                    )}
                    {opType === "edit" && itemType === "Expenses" ? (
                      <SearchExpenseComponent />
                    ) : (
                      <></>
                    )}

                    {opType === "edit" && itemType === "Categories" ? (
                      <EditCategoryComponent categoryArray={categoryArray} />
                    ) : (
                      <></>
                    )}

                    {opType === "add" && itemType === "Categories" ? (
                      <AddCategoryComponent categoryArray={categoryArray} />
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
