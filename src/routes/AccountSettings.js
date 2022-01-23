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
  changeUserPassword,
} from "../ReqLib";
import { useNavigate } from "react-router-dom";

export default function AccountSettings() {
const [userChange,setUserChange] = useState ({current_password:'', new_password:'', new_password_confirmation:''})
const onClickHandle=async()=>{
  await changeUserPassword(userChange)
}
  return (
    <div className="AccountSettingsPage">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <div className="containerSettings">
              <Form>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control onChange={(e)=>setUserChange({...userChange, 'current_password':e.target.value})} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control  onChange={(e)=>setUserChange({...userChange, 'new_password':e.target.value})} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control  onChange={(e)=>setUserChange({...userChange, 'new_password_confirmation':e.target.value})} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={onClickHandle}>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
