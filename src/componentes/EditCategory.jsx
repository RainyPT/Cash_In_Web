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
import { editCategory, deleteCategory } from "../ReqLib";
import { useEffect, useState } from "react";
function EditCategoryComponent({ categoryArray }) {
  const [category, setCategory] = useState({
    id: null,
    name: "",
    new_name: "",
    category_name: "",
  });
  const onEditCategory = async (id, reqOBJ) => {
    const res = await editCategory(id, reqOBJ);
    if (res.status === 200) {
      alert("Category Edited Successfully");
    } else {
      alert("Something Went Wrong");
    }
  };

  const onDeleteCategory = async (id) => {
    const res = await deleteCategory(id);
    if (res.status === 200) {
      alert("Category Deleted Successfully");
    } else {
      alert("Something Went Wrong");
    }
  };
  return (
    <Row>
      <Col></Col>
      <Col md={8} style={{ paddingTop: "10vh" }}>
        <Form>
          <center>
            <DropdownButton
              as={ButtonGroup}
              align={{ lg: "end" }}
              title={
                category.category_name !== ""
                  ? category.category_name
                  : "Select Category: "
              }
              id="dropdown-menu-align-responsive-1"
              variant="outline-warning"
              onSelect={(e) => {
                setCategory({ category_name: e });
              }}
              style={{
                marginTop: "2vh",
              }}
            >
              {categoryArray.data.length > 0 ? (
                categoryArray.data.map((c) => (
                  <Dropdown.Item eventKey={c.name}>{c.name}</Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item disabled>No Categories</Dropdown.Item>
              )}
            </DropdownButton>

            <Form.Group className="mb-3" style={{ marginTop: "3vh" }}>
              <Form.Control
                type="text"
                placeholder="Edit Category name"
                onChange={(e) =>
                  setCategory({ ...category, name: e.target.value })
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
  );
}
export default EditCategoryComponent;
