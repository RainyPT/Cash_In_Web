import { Col, Container, Row } from "react-bootstrap";
import RecentActivityComponent from "../componentes/RecentActivity";
import { useNavigate } from "react-router-dom";
import GraphAllCategoriesComponent from "../componentes/GraphAllCategories";
import GraphCategoryExpensesComponent from "../componentes/GraphCategoryExpenses";

export default function Graphspage() {
  const navigate = useNavigate();
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
            <RecentActivityComponent />
          </Col>
          <Col md={9}>
            <GraphAllCategoriesComponent />
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ height: "10vh" }}></div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <GraphCategoryExpensesComponent />
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
