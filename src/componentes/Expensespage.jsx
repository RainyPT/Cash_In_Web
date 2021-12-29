import React from "react";
import { Card, Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";


function Expensespage() {
    return (
    <div className="Expensespage">
        <Container style={{ height: "100vh" }}>
        
          <center>
              <buttongroup>
                <button className="doubleButton" >EXPENSES</button>
                <button className="doubleButton"  id="doubleButton2">Categories</button>
              </buttongroup>
            </center>
          
          <Container>
            <Row>
              <Col></Col>
              <Col xs={8}>

                <div className="containerExpenses">
                  <center>
                    <button className="doubleButton"  id="AddButton">Add Expenses</button>
                    <button className="doubleButton" id="EditButton" >Edit Expenses</button>
                    <p></p>
                    <button className="doubleButton" id="ImportButton" >Edit Expenses</button>
                  </center>
                </div>

             </Col>
              <Col></Col>
            </Row>
          </Container>

        </Container>
    </div>
    );
}

export default Expensespage;
