import { useState } from "react";
import {
  Col,
  Row,
  Button,
  ButtonGroup,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { createCategory } from "../ReqLib";
function AddCategoryComponent({ categoryArray }) {
  const [categoryToCreate, setCategoryToCreate] = useState({
    name: "",
    main_category: "",
  });
  const onCreateCategory = async () => {
    const res = await createCategory(categoryToCreate);
    if (res.status === 201) {
      alert("Category Created!");
    }
  };
  return (
    <>
      <Row>
        <Col></Col>
        <Col md={8} style={{ paddingTop: "10vh" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category Name: "
                onChange={(e) =>
                  setCategoryToCreate({
                    ...categoryToCreate,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Max</Form.Label>
              <Form.Control
                type="number"
                placeholder="Maximum: "
                onChange={(e) =>
                  setCategoryToCreate({
                    ...categoryToCreate,
                    max: e.target.value,
                  })
                }
              />
            </Form.Group>
            <DropdownButton
              as={ButtonGroup}
              align={{ lg: "end" }}
              title={
                categoryToCreate.main_category !== ""
                  ? categoryToCreate.main_category
                  : "Select Category: "
              }
              id="dropdown-menu-align-responsive-1"
              variant="warning"
              style={{
                marginBottom: "10vh",
              }}
              onSelect={(e) =>
                setCategoryToCreate({ ...categoryToCreate, main_category: e })
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
  );
}
export default AddCategoryComponent;
